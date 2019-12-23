pragma solidity ^0.5.0;

contract balanceLedger {
  uint public count = 0;

  struct entry {
    uint id;
    string content;
    bool completed;
  }


// Create a Public mapping named "entries" of an integer to entry
// TODO

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
// TODO
    emit TaskCreated(count, _content,  false);
  }

  function togglePaymentStatus(uint _id) public {
    entry memory _entry = entries[_id];
    _entry.completed = !_entry.completed;
    entries[_id] = _entry;
    emit paymentMade(_id, _entry.completed);
  }

}
