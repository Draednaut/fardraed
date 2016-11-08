
jQuery(document).ready(function($) {
    "use strict";
if ($('#tweet-example-1').length>0) {
  var config1 = {
    "id": '584036739448233986', // place your id here
    "domId": 'tweet-example-1',
    "maxTweets": 1,
    "enableLinks": true,
    "showPermalinks": true,
    "showUser": false,
    "showInteraction": false
  };
  twitterFetcher.fetch(config1);
}

if ($('#tweet-example-footer').length>0) {
  var config_footer = {
    "id": '584036739448233986', // place your id here
    "domId": 'tweet-example-footer',
    "maxTweets": 3,
    "enableLinks": true,
    "showPermalinks": true,
    "showUser": false,
    "showInteraction": false
  };
  twitterFetcher.fetch(config_footer);
}
});


