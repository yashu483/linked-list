'use strict';

import { LinkedList } from './modules/linked-list';

const newList = new LinkedList();

newList.append('first');
newList.append('second');
newList.insertAt('middle', 1);
newList.prepend('third');
newList.prepend('third');
newList.insertAt('ooyaah', 5);

console.log(newList.head);
