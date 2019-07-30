'use strict';

const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

function writeThis(str,maxNumber) {
  for (let i=0; i<maxNumber; i++) {
    console.log(str);
  }
}

function writeMyArray() {
  for (const item of myWordList) {
    writeThis(item.text, item.total);
  }
}


writeMyArray();


