import axios from 'axios';

async function getV2LinkArray() {
const v2LinkArray = [];
const v2Res = await axios.get("https://www.v2ex.com").catch( res => {throw res;} );
const v2HTML = v2Res.data;
const v2RegExp = /item_hot_topic_title">\s*?<a\s*?href="(.*?)">(.*?)<\/a>/ig;

// Finding successive matches
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
let regRes;
while( (regRes = v2RegExp.exec(v2HTML)) !== null ) {
  v2LinkArray.push({
    url: regRes[1],
    title: regRes[2],
  });
}

console.log(v2LinkArray);
return v2LinkArray;

}

getV2LinkArray();
