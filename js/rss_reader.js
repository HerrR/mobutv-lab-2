google.load("feeds", "1");
function initialize() {
    var feed = new google.feeds.Feed('http://www.rendip.com/rss');
    feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
    feed.setNumEntries(13);
    feed.load(function(result) {
    if (!result.error) {
    	var articleImages = [];

		for (var i = 0; i < result.feed.entries.length; i++) {
			var entry = result.feed.entries[i];
			var mediaEntries = entry.xmlNode.getElementsByTagNameNS('*','thumbnail');
			for (var j = 0; j < mediaEntries.length; j++) {
				var mediaEntry = mediaEntries[j];
				var mediaThumbnailUrl = mediaEntry.attributes.getNamedItem('url').value;
				articleImages.push(mediaThumbnailUrl);
				}
			}

			var articles = [];
			for(var k = 0; k< result.feed.entries.length; k++){
				articles.push({"article":result.feed.entries[k],"image":articleImages[k]});
			}

			for(article in articles){
				addArticle(articles[article]);
			}
			updateFeed("*");
    	}
  	});
}
google.setOnLoadCallback(initialize);