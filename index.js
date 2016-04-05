import axios from 'axios';

/**
* sample return: [{title:.., url:..},..]
*/
async function getMedium() {
  const linkArray = [];
  const res = await axios.get("https://medium.com/top-stories").catch( res => {throw res;} );
  const html = res.data;
  const regExp = /homeCollectionId":".{0,12}","title":"(.*?)","detectedLanguage.*?uniqueSlug":"(.*?)"/ig;

  // Finding successive matches. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
  let regRes;
  while( (regRes = regExp.exec(html)) !== null ) {
    linkArray.push({
      title: regRes[1],
      url: regRes[2],
    });
  }

  console.log(linkArray);
  return linkArray;

}

getMedium()
