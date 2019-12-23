App = {
    loading: false,
    contracts: {},
  
    load: async () => {
      await App.loadWeb3()
      await App.loadAccount()
      await App.loadContract()
      await App.render()
    },
  
    // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
    loadWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider
        web3 = new Web3(web3.currentProvider)
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
          // Request account access if needed
          await ethereum.enable()
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */})
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider
        window.web3 = new Web3(web3.currentProvider)
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */})
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
    },
  
    loadAccount: async () => {
      // Set the current blockchain account
      App.account = web3.eth.accounts[0]
    },
  
    loadContract: async () => {
      // Create a JavaScript version of the smart contract
      const balanceLedger = await $.getJSON('balanceLedger.json')
      App.contracts.balanceLedger = TruffleContract(balanceLedger)
      App.contracts.balanceLedger.setProvider(App.web3Provider)
  
      // Hydrate the smart contract with values from the blockchain
      App.balanceLedger = await App.contracts.balanceLedger.deployed()
    },
  
    render: async () => {
      // Prevent double render
      if (App.loading) {
        return
      }
  
      // Update app loading state
      App.setLoading(true)
  
      // Render Account
      $('#account').html(App.account)
  
      // Render Entries
      await App.renderEntries()
  
      // Update loading state
      App.setLoading(false)
    },
  
    renderEntries: async () => {
      // Load the total entry count from the blockchain
      const count = await App.balanceLedger.count()
      const $entryTemplate = $('.entryTemplate')
  
      // Render out each entry with a new entry template
      for (var i = 1; i <= count; i++) {
        // Fetch the entry data from the blockchain
        const entry = await App.balanceLedger.entries(i)
        const entryId = entry[0].toNumber()
        const entryContent = entry[1]
        const paymentMade = entry[2]
  
        // Create the html for the entry
        const $newEntryTemplate = $entryTemplate.clone()
        $newEntryTemplate.find('.content').html(entryContent)
        $newEntryTemplate.find('input')
                        .prop('name', entryId)
                        .prop('checked', paymentMade)
                        .on('click', App.togglePaymentStatus)
  
        // Put the entry in the correct list
        if (paymentMade) {
          $('#paymentMadeList').append($newEntryTemplate)
        } else {
          $('#entryList').append($newEntryTemplate)
        }
  
        // Show the entry
        $newEntryTemplate.show()
      }
    },
  
    makeEntry: async () => {
      App.setLoading(true)
      const content = $('#newEntry').val()
      await App.balanceLedger.makeEntry(content)
      window.location.reload()
    },
  
    togglePaymentStatus: async (e) => {
      App.setLoading(true)
      const entryId = e.target.name
      await App.balanceLedger.togglePaymentStatus(entryId)
      window.location.reload()
    },
  
    setLoading: (boolean) => {
      App.loading = boolean
      const loader = $('#loader')
      const content = $('#content')
      if (boolean) {
        loader.show()
        content.hide()
      } else {
        loader.hide()
        content.show()
      }
    }
  }
  
  $(() => {
    $(window).load(() => {
      App.load()
    })
  })