'use strict';

import { LinkedList } from './modules/linked-list';

const newList = new LinkedList();

newList.append('first');
newList.append('second');
newList.append('third');

console.table(newList.head, newList.tail);
