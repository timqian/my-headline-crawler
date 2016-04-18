import axios from 'axios';

/**
* sample return: [{title:.., url:..},..]
*/
async function getHN() {
  const linkArray = [];
  const res = await axios.get("https://news.ycombinator.com").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /class="deadmark.*?href=".*?">(.*?)<\/a>.*?\n.*?class="score".*?>(.*?)\spoints<\/span>.*?class="age"><a\shref="(.*?)">/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      url: `https://news.ycombinator.com/${regRes[3]}`,
      title: `${regRes[1]}`,
      score: regRes[2],
    });
  }

  // find 10 links with most points
  const newLinkArray = linkArray
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  // console.log(newLinkArray);
  return newLinkArray;

}

export default getHN;
