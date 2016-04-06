// generate json file

import getHN from './src/getHN'
import getReddit from './src/getReddit'
import getMedium from './src/getMedium'
import getV2 from './src/getV2'
import getGithub from './src/getGithub'
import fs from 'fs'

async function makeJson() {
  const json = {};
  json.v2ex = await getV2().catch(err => {throw err});
  console.log('v2ex done');
  json.medium = await getMedium().catch(err => {throw err});
  console.log('medium done'); 
  json.github = await getGithub().catch(err => {throw err}); 
  console.log('github done');
  json.HN = await getHN().catch(err => {throw err});   
  console.log('HN done');
  json.reddit = await getReddit().catch(err => {throw err});
  console.log('reddit done');
  return json;
}

makeJson()
  .then(json => {
    console.log(json);
    const d = new Date();
    const fileName = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}.json`
    fs.writeFile(`./data/${fileName}`, JSON.stringify(json), 'utf8', (err) => {
      if (err) throw err;
      console.log(fileName, 'wrote succeed');
    });
  })
  .catch(err => {
    console.log('err: ', err)
  });
