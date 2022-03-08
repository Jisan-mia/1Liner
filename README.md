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
### blog word count visualizer
```js

// Words used to populate the visualizer. 
var bigString = "Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Drinking vinegar bicycle rights bitters pop-up, poutine art party gentrify you probably haven't heard of them shaman mixtape kitsch pinterest. Gochujang vape gentrify taiyaki. Vexillologist poke brunch semiotics, gentrify 3 wolf moon edison bulb asymmetrical quinoa schlitz artisan wayfarers. Shoreditch selfies food truck edison bulb sriracha offal raclette prism. Succulents trust fund lyft ennui before they sold out tacos. Scenester wayfarers narwhal hell of. Tilde ennui banjo pour-over air plant narwhal organic trust fund. Hammock viral air plant hell of, tousled roof party raclette chicharrones plaid bespoke mlkshk meditation. Slow-carb ethical beard trust fund before they sold out Lorem ipsum dolor amet sriracha kogi pork belly succulents hella banh mi. Post-ironic austin YOLO celiac godard, banjo plaid hashtag air plant. Woke offal hot chicken, lyft live-edge hell of kinfolk try-hard iceland fam tumeric umami keffiyeh. Authentic offal kale chips palo santo chicharrones swag yuccie banjo hella blog locavore pinterest lo-fi. Lo-fi hoodie flexitarian cloud bread. Brunch fingerstache meditation whatever selfies biodiesel, edison bulb pickled.Prism ramps VHS pour-over tofu stumptown. Tousled taiyaki echo park post-ironic ethical adaptogen. Cliche letterpress mumblecore disrupt 8-bit messenger bag leggings brunch cred tumeric lomo literally. Heirloom everyday carry glossier tilde.Fingerstache chartreuse hot chicken 90's tofu gentrify cred ugh. Blue bottle XOXO succulents letterpress meggings, truffaut drinking vinegar wolf mustache mixtape. Cronut cornhole neutra, hella mixtape gastropub photo booth actually chillwave lyft put a bird on it man braid. Post-ironic prism seitan, vape drinking vinegar hoodie chartreuse pork belly taiyaki unicorn authentic selvage. Food truck shaman roof party put a bird on it raw denim, swag tote bag poutine messenger bag. Crucifix roof party shoreditch selfies, intelligentsia palo santo banh mi swag authentic kitsch hoodie lomo forage vape. Viral raw denim meggings four dollar toast gastropub kickstarter selfies shaman biodiesel bushwick.Leggings lumbersexual skateboard migas tbh. Asymmetrical copper mug live-edge taxidermy iPhone pitchfork. Bitters flannel everyday carry bushwick deep v swag put a bird on it gastropub shoreditch. Stumptown bitters tilde sriracha schlitz kale chips vape shabby chic blog viral taxidermy franzen post-ironic. Tote bag portland put a bird on it, stumptown DIY +1 venmo blog synth keffiyeh health goth.Migas lo-fi direct trade unicorn stumptown cornhole. Occupy kale chips edison bulb pok pok, activated charcoal microdosing sustainable cloud bread pinterest ethical. Kitsch gluten-free pour-over locavore authentic live-edge XOXO franzen master cleanse 3 wolf moon. Flannel vape paleo four dollar toast. Mustache prism hexagon cardigan. Lumbersexual VHS salvia, chartreuse photo booth raclette swag craft beer. cliche banh mi jianbing. Meggings literally lyft blog tattooed pickled bitters pop-up woke banjo asymmetrical food truck next level cloud bread tofu. Swag tumeric man braid humblebrag hella blog meggings vape air plant 90's marfa beard jianbing flexitarian actually. Locavore gluten-free gentrify enamel pin readymade. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Lorem ipsum dolor amet blue bottle banh mi iceland kogi helvetica woke authentic hoodie snackwave sustainable vexillologist cray lumbersexual. Health goth gastropub kale chips franzen, neutra chillwave jean shorts prism adaptogen kombucha tofu PBR&B hot chicken. Vinyl hammock subway tile, XOXO pok pok pabst yr cardigan ugh cliche readymade. Lomo deep v gluten-free farm-to-table. Drinking vinegar yr retro, normcore mlkshk hammock four loko. Drinking vinegar bicycle rights bitters pop-up, poutine art party gentrify you probably haven't heard of them shaman mixtape kitsch pinterest. Gochujang vape gentrify taiyaki. Vexillologist poke brunch semiotics, gentrify 3 wolf moon edison bulb asymmetrical quinoa schlitz artisan wayfarers. Shoreditch selfies food truck edison bulb sriracha offal raclette prism. Succulents trust fund lyft ennui before they sold out tacos. Scenester wayfarers narwhal hell of. Tilde ennui banjo pour-over air plant narwhal organic trust fund. Hammock viral air plant hell of, tousled roof party raclette chicharrones plaid bespoke mlkshk meditation. Slow-carb ethical beard trust fund before they sold out Lorem ipsum dolor amet sriracha kogi pork belly succulents hella banh mi. Post-ironic austin YOLO celiac godard, banjo plaid hashtag air plant. Woke offal hot chicken, lyft live-edge hell of kinfolk try-hard iceland fam tumeric umami keffiyeh. Authentic offal kale chips palo santo chicharrones swag yuccie banjo hella blog locavore pinterest lo-fi. Lo-fi hoodie flexitarian cloud bread. Brunch fingerstache meditation whatever selfies biodiesel, edison bulb pickled.Prism ramps VHS pour-over tofu stumptown. Tousled taiyaki echo park post-ironic ethical adaptogen. Cliche letterpress mumblecore disrupt 8-bit messenger bag leggings brunch cred tumeric lomo literally. Heirloom everyday carry glossier tilde.Fingerstache chartreuse hot chicken 90's tofu gentrify cred ugh. Blue bottle XOXO succulents letterpress meggings, truffaut drinking vinegar wolf mustache mixtape. Cronut cornhole neutra, hella mixtape gastropub photo booth actually chillwave lyft put a bird on it man braid. Post-ironic prism seitan, vape drinking vinegar hoodie chartreuse pork belly taiyaki unicorn authentic selvage. Food truck shaman roof party put a bird on it raw denim, swag tote bag poutine messenger bag. Crucifix roof party shoreditch selfies, intelligentsia palo santo banh mi swag authentic kitsch hoodie lomo forage vape. Viral raw denim meggings four dollar toast gastropub kickstarter selfies shaman biodiesel bushwick.Leggings lumbersexual skateboard migas tbh. Asymmetrical copper mug live-edge taxidermy iPhone pitchfork. Bitters flannel everyday carry bushwick deep v swag put a bird on it gastropub shoreditch. Stumptown bitters tilde sriracha schlitz kale chips vape shabby chic blog viral taxidermy franzen post-ironic. Tote bag portland put a bird on it, stumptown DIY +1 venmo blog synth keffiyeh health goth.Migas lo-fi direct trade unicorn stumptown cornhole. Occupy kale chips edison bulb pok pok, activated charcoal microdosing sustainable cloud bread pinterest ethical. Kitsch gluten-free pour-over locavore authentic live-edge XOXO franzen master cleanse 3 wolf moon. Flannel vape paleo four dollar toast. Mustache prism hexagon cardigan. Lumbersexual VHS salvia, chartreuse photo booth raclette swag craft beer. cliche banh mi jianbing. Meggings literally lyft blog tattooed pickled bitters pop-up woke banjo asymmetrical food truck next level cloud bread tofu. Swag tumeric man braid humblebrag hella blog meggings vape air plant 90's marfa beard jianbing flexitarian actually. Locavore gluten-free gentrify enamel pin readymade.";

/* Takes a string and turns it into a list of substrings.
Adds elements (in this case, words) to the output, 
then joins all elements with a space. */
function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
}


//Displays output on page, generated after user submits a number.
function visibleWords() {
    var grabInput = document.getElementById("id1").value;
    document.getElementById("demo").innerHTML = (truncate(bigString, grabInput));
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
### union of arrays
```js
const union = (...arr) => [...new Set(arr.flat())];
```
### sort array of item by given key
```js
const sortBy = (arr, k) => arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
```
