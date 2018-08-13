var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
  .end(function(err, sres) {
    if (err) {
      return console.error(err);
    }
    
    var topicUrls = [];
    var $ = cheerio.load(sres.text);
    var items = [];
    $('#topic_list .topic_title').each(function(idx, element) {
      var $element = $(element);

      var href = url.resolve(cnodeUrl, $element.attr('href'));
      
      topicUrls.push(href);
    })

    console.log(topicUrls);

    var ep = new eventproxy();
    ep.after('topic_html', topicUrls.length, function(topics) {
      topics = topics.map(function(topicPair) {
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        var $ = cheerio.load(topicHtml);
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim(),
          author1: $('.user_name a').text().trim(),
          score1: $('.floor .big').text().trim(),
        })
      })
      console.log('final');
      console.log(topics);
    })

    topicUrls.forEach(function(topicUrl) {
      superagent.get(topicUrl)
        .end(function(err, res) {
          if (err) {
            console.error(err);
          }

          console.log('fetch ' + topicUrl + ' successful');
          ep.emit('topic_html', [topicUrl, res.text]);
        })
    })
  })
