function detectIphone () {
  var uagent = navigator.userAgent.toLowerCase();
  if (uagent.search('iphone') > -1) {
    document.head.insertAdjacentHTML('beforeEnd', '<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0">')
  } else {
    document.head.insertAdjacentHTML('beforeEnd', '<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=5.0">')
  }
}

detectIphone();
