import axios from './utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getHN() {
  const linkArray = [];
  const res = await axios.get("https://github.com/trending?since=monthly").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /repo-list-name[\w\W]*?href="\/(.*?)"([\w\W]*?)repo-list-meta[\w\W]*?([,\d]{1,6})\sstars/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {

    // get description(maybe with other html tags)
    const descripReg = /repo-list-description">\n\s*?([\w\W]*?)\n\s*?<\/p>/;
    const descrip = descripReg.exec(regRes[2]) ? descripReg.exec(regRes[2]) : "no description";

    // remove html tags
    const descrip2 = descrip[1].trim().replace(/<.*>/, '');

    linkArray.push({
      url: `https://github.com/${regRes[1]}`,
      title: `${regRes[1]}: ${descrip2}`,
      score: regRes[3].replace(',', '')
    });
  }

  // find 10 links with most points
  const newLinkArray = linkArray.slice(0, 10);

  console.log('github linkArray.length', newLinkArray.length);
  return newLinkArray;

}

export default getHN;
