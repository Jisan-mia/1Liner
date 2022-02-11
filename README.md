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
