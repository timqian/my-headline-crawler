import axios from '../utils/aaxios.js';

/**
* sample return: [{title:.., url:..},..]
*/
async function getMedium() {
  const linkArray = [];
  const res = await axios.get("https://medium.com/top-stories").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /homeCollectionId":".{0,12}","title":"(.*?)","detectedLanguage.*?recommends":(\d{0,7}),.*?uniqueSlug":"(.*?)"/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      title: `${regRes[1]}`,
      score: `${regRes[2]}`,
      url: `https://medium.com/p/${regRes[3]}`
    });
  }

  console.log('Medium linkArray.length', linkArray.length);
  return linkArray.slice(0,10);

}

export default getMedium;
