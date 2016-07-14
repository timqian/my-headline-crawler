import axios from '../utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getHN() {
  const linkArray = [];
  const res = await axios.get("https://www.producthunt.com/").catch( res => {throw res;} );
  let html = res.data;

  // 去掉 Today 前面的内容。为了方便后面正则匹配
  const todayPosition = html.indexOf('>Today<\/span>')
  html = html.slice(todayPosition)

  const regExp = /feature.*?>(.*?)<\/span.*?-->(.*?)<!--.*?postVote.*?-->(\d{1,5})<!--.*?<a.*?href="(.*?)"/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      url: `https://www.producthunt.com${regRes[4]}`,
      title: `${regRes[1]}: ${regRes[2]}`,
      score: regRes[3],
    });
  }

  // get first 10 links
  const newLinkArray = linkArray
    .slice(0, 10);

  // console.log(newLinkArray);
  console.log('ProductHunt done', newLinkArray.length);
  return newLinkArray;

}

export default getHN;
