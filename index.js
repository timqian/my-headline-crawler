// generate json file

import fs from 'fs'
import moment from 'moment'

import getHN from './src/getHN'
import getReddit from './src/getReddit'
import getMedium from './src/getMedium'
import getV2 from './src/getV2'
import getGithub from './src/getGithub'


async function makeJson() {
  const json = {};
  json.HN = await getHN().catch(err => {throw err});   
  console.log('HN done');
  json.github = await getGithub().catch(err => {throw err}); 
  console.log('github done');
  json.reddit = await getReddit().catch(err => {throw err});
  console.log('reddit done');
  json.medium = await getMedium().catch(err => {throw err});
  console.log('medium done'); 
  json.v2ex = await getV2().catch(err => {throw err});
  console.log('v2ex done');
  console.log(json);
  return json;
}


makeJson()
  .then(json => {
    const fileName = `${moment().format('YYYY-MM-DD')}.json`
    fs.writeFile(`./data/${fileName}`, JSON.stringify(json), 'utf8', (err) => {
      if (err) throw err;
      console.log(fileName, 'wrote succeed');
    });
  })
  .catch(err => {
    console.log('err: ', err)
  });

  
  
  
  
