# 1Liner
### generating uuid
```js
function createUUID(): string {
  let dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
```
### katex
```js
parsePostContent(post){
  for(var e = 0; e < post.equations.length; e++){
    var equation = post.equations[e].value;
    var position = post.equations[e].key;
    post.content = post.content.replace("[" + position + "]", katex.renderToString(equation));
  }
  return post.content;
```
### is multiple objects are same
```js
const isEqual = (...objects) => objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));

isEqual({name: 'JavaScript'}, {name: 'JavaScript'}) // true
isEqual({name: 'JavaScript'}, {name: 'Python'}) // false

```
### remove duplicates from arra
```js
const removeDuplicate = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

const withSet = (arr) => [...new Set(arr)]
```
### shuffle an array
```js
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
```
### capitalize first letter
```js
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
``` 
### day difference
```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
```
### get average of numbers
```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
```
### reverse a string
```js
const reverse = str => str.split('').reverse().join('');
```
### empty an array
```js
const empty = (arr) => (arr.length = 0);
```
### find index of maximum number of array
```js
const maxIndex = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```
### find index of minumum number of array
```js
const minInedx = (arr) => arr.reduce((prev, curr, i, a) => (curr < a[prev] ? i : prev), 0);
```
### intersection of arrays
```js
const getIntersection = (a, ...arr) => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```
