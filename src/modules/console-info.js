'use strict';

const addInfoToConsole = function addInfoToConsole() {
  console.clear();
  function logStyledMethod(method, description) {
    console.groupCollapsed(`%c${method}`, 'color: black; font-weight: bold;');
    console.log(`%c${description}`, 'color: black;');
    console.groupEnd();
  }

  // introduction for users using console
  const linkedListAPI = {
    'append(value)': 'Adds a new node at the end of the linked list',
    'prepend(value)': 'Adds a new node at the start of the linked list',
    size: 'An accessor property which returns the size of the linked list',
    head: 'Returns the head node',
    tail: 'Returns the tail node',
    'at(index)': 'Returns the node at the given index',
    'pop()': 'Removes the last element from the list',
    'contains(value)':
      'Returns true if the value is in the list, otherwise false',
    'find(value)':
      'Returns the index of the node containing value, or null if not found',
    'toString()':
      'Prints the linked list in format: ( value ) -> ( value ) -> null',
    'insertAt(value, index)':
      'Inserts a new node with the given value at the specified index',
    'removeAt(index)': 'Removes the node at the given index',
  };
  console.log('\n\n');

  console.log(
    `%cYou can use the %cLinkedList()%c constructor to create a new linked list.
    example use: const  list = new LinkedList()
     `,
    'color: #6a5acd; font-weight: bold; ',
    'color: red; font-weight: bold; ',
    'color: #6a5acd; font-weight: bold;',
  );

  console.log(
    '%cBelow is a list of methods and properties you can use on a list:\n',
    'color: #20b2aa; font-weight: bold;;',
  );
  Object.entries(linkedListAPI).forEach(([method, desc]) => {
    logStyledMethod(method, desc);
  });
};

export { addInfoToConsole };
