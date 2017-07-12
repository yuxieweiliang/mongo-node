let path = require('path');
const argvs = process.argv;
let dirroot = argvs[3] || path.resolve(__dirname, '../src/units/');

console.log('\n*********************************************************');
console.log('*********************************************************');
console.log('******************请设置组件的名称*************************');
console.log('\t usage: npm run create:class 组件名 组件的根目录');
console.log('\t 默认组件根目录:' + dirroot);
console.log('**********************************************************');
console.log('*********************************************************\n');