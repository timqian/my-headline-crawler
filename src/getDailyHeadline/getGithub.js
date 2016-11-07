import axios from '../utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getHN() {
  const linkArray = [];
  const res = await axios.get("https://github.com/trending").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /d\-inline\-block\scol\-9\smb-1[\w|\W]*?href="(.*?)"[\w|\W]*?col-9\sd-inline-block\stext-gray\sm-0\spr-4\"\>([\w|\W]*?)\<\/p\>[\w|\W]*?([,\d]{1,6})\sstars\stoday/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {

    linkArray.push({
      url: `https://github.com${regRes[1]}`,
      title: `${regRes[1].slice(1)}: ${regRes[2].trim().replace(/<.*>/, '')}`,
      score: regRes[3].replace(',', '')
    });
  }

  // find 10 links with most points
  const newLinkArray = linkArray.slice(0, 10);

  console.log('github linkArray.length', newLinkArray.length);
  return newLinkArray;

}

export default getHN;
