'use strict';

import { LinkedList } from './modules/linked-list';

const newList = new LinkedList();

newList.append('first');
newList.append('second');
newList.prepend('third');
newList.prepend('third');

console.log(newList.head, newList.tail, newList.size);
