'use strict';

import { LinkedList } from './modules/linked-list';

const newList = new LinkedList();

newList.append('first');
newList.append('second');
newList.prepend('third');
newList.prepend('third');

console.log(
  newList.toString(),
  newList.head,
  newList.tail,
  newList.find('first'),
  newList.pop(),
  newList.tail,
  newList.size,
  newList.at(2),
  newList.at(100),
  newList.tail,
);
newList.pop();
console.log(
  newList.head,
  newList.tail,
  newList.contains('first'),
  newList.find('first'),
);

console.log(newList.toString());
