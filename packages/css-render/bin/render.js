const arguments = require('yargs').argv
const fs = require('fs');

let cssPath = fs.realpathSync(arguments.c)
let outPath = fs.realpathSync(arguments.o)
let namespace = arguments.n + '-style';

let cssData = fs.readFileSync(cssPath);

let litCss = `
import {html} from '@polymer/polymer/polymer-element.js';
const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
 \`<template>
 <style>
${cssData}
</style></template>\`;
styleElement.register('${namespace}'); 
`;

fs.writeFileSync(outPath, litCss, 'utf-8')

console.log(litCss)
console.log(arguments)

