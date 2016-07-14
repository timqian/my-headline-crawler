export default {
  v2ex: {
    scoreReg: /(\d{1,6})\s回复\s&nbsp;/ // For the post page
  },
  HN: {
    scoreReg: />(\d{1,7})\spoints</
  },
  medium: {
    scoreReg: /"recommends":(\d{0,7}),/
  },
  reddit: {
    scoreReg: /<span class="number">([\d,]{1,8})<\/span>.*?points/
  },
  productHunt: {
    scoreReg: /post-vote-button--count.*?>(\d{1,4})<\/span/
  }
}
