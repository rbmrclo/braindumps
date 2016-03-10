// Don't let your sneaky colleagues send you a link that might ruin your day.
// Attempts to check what's behind the short url that your colleague sent to you.
// No more shocking NSFWs and click baits! :p
//
// Requires phantom.js
// npm install -g phantomjs
//
// Run: phantomjs sniff_shorturl.js http://goo.gl/ASD123
//
var page = require('webpage').create(),
    system = require('system'),
    address;

if (system.args.length === 1) {
    console.log('Usage: app.js <some URL>');
    phantom.exit(1);
} else {
  address = system.args[1];
  page.open(address, function (status) {
    if (status !== 'success') {
      console.log('FAIL to load the address');
    } else {
      var url = page.evaluate(function() {
        return document.URL;
      });

      console.log("The URL is: " + url);
    }
    phantom.exit();
  });
}
