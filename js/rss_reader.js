google.load("feeds", "1");
function initialize() {
    var feed = new google.feeds.Feed('http://www.rendip.com/rss');
    feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
    feed.setNumEntries(10);
    feed.load(function(result) {
    if (!result.error) {
    	var articleImages = [];

		for (var i = 0; i < result.feed.entries.length; i++) {
			var entry = result.feed.entries[i];
			var mediaEntries = entry.xmlNode.getElementsByTagNameNS('*','thumbnail');
			// var articleImages = [];
			for (var j = 0; j < mediaEntries.length; j++) {
				var mediaEntry = mediaEntries[j];
				var mediaThumbnailUrl = mediaEntry.attributes.getNamedItem('url').value;
				// console.log(mediaThumbnailUrl);
				articleImages.push(mediaThumbnailUrl);
				}
			}
			// console.log(mediaThumbnailUrl);
			// console.log(result.feed.entries.length);
			var articles = [];
			for(var k = 0; k< result.feed.entries.length; k++){
				articles.push({"article":result.feed.entries[k],"image":articleImages[k]});
			}
			
			console.log(articles);
			var toBePrinted = "";

			for(article in articles){
				addArticle(articles[article]);
				toBePrinted += "<a href='#article' data-transition='flip' onclick='selectArticle("+article+")'>";
				toBePrinted += "<div class='row articleRow'>";
				toBePrinted += "<div class='background-image' style='background-image:url("+articles[article].image+")'></div>";
				toBePrinted += "<div class='content'>";
				// toBePrinted += "<a href='"+articles[article].article.link+"'>";

				toBePrinted += "<h4 class='articleHeadline'>"+articles[article].article.title+"</h4>";
				
				toBePrinted += "</div>";
				toBePrinted += "</div>";
				toBePrinted += "</a>";
			}

      document.getElementById('articlesContainer').innerHTML = toBePrinted;
    	}
  	});
}
google.setOnLoadCallback(initialize);