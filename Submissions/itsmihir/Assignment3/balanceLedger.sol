pragma solidity ^0.5.0;

contract balanceLedger {
  uint public count = 0;

  struct entry {
    uint id;
    string content;
    bool completed;
  }


// Create a Public mapping named "entries" of an integer to entry
  mapping(uint256=>entry) entries;

  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event paymentMade(
    uint id,
    bool paymentDone
  );

  constructor() public {
    makeEntry("CEV loves you guys!");
  }

  function makeEntry(string memory _content) public {
    count ++;
// Store the "entry" type data in the "entries"(the mapping declared above) at the index "count"
  entries[count].id=count;
  entries[count].content=_content;
  entries[count].completed=false;
    emit TaskCreated(count, _content,  false);
  }

  function togglePaymentStatus(uint _id) public {
    entry memory _entry = entries[_id];
    _entry.completed = !_entry.completed;
    entries[_id] = _entry;
    emit paymentMade(_id, _entry.completed);
  }

}
