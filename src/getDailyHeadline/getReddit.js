// https://www.reddit.com/r/programming/top/

import axios from '../utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getReddit() {
  const linkArray = [];
  const res = await axios.get("https://www.reddit.com/r/programming/top").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /class="score unvoted">(\d{0,7})<\/div>.*?title\smay-blank.*?href=".*?".*?>(.*?)<\/a>.*?class="first"><a\shref="(.*?)"/ig;

  // Finding successive matches. ref: htts://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      url: regRes[3],
      title: regRes[2],
      score: regRes[1]
    });
  }

  // find 10 links with most points
  if (linkArray.length === 26) {
    console.log('Reddit linkArray.length', linkArray.length);
    return linkArray.slice(1, 11);
  } else {
    console.log('Reddit linkArray.length', linkArray.length);
    return linkArray.slice(0, 10);
  }

}

export default getReddit;
