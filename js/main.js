'use strict';

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function writeThis(str,maxNumber) {
  for (let i=0; i<maxNumber; i++) {
    console.log(str);
  }
}

writeThis('patata',6);
writeThis('Aguacate', getRandomNumber(30));
writeThis('Pizza', 10);

