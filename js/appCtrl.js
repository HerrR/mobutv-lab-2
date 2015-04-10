var app = angular.module('mobutv-lab-2-app', []);
	app.controller('appCtrl', function($scope) {

		$scope.getItems = function(){
			return $scope.rssObjects;
		}

		// google.load("feeds", "1");
		var initialize = function() {
		    var feed = new google.feeds.Feed('http://www.rendip.com/rss');
		    feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
		    feed.setNumEntries(5);
		    feed.load(function(result) {
		    if (!result.error) {
		      for (var i = 0; i < result.feed.entries.length; i++) {
		        var entry = result.feed.entries[i];
		        var mediaEntries = entry.xmlNode.getElementsByTagNameNS('*','thumbnail');
		        for (var j = 0; j < mediaEntries.length; j++) {
		            var mediaEntry = mediaEntries[j];
		            var mediaThumbnailUrl = mediaEntry.attributes.getNamedItem('url').value
		            // console.log(mediaThumbnailUrl);
		        }
		      }
		      console.log(result.feed.entries);
		      // $scope.rssObjects = result.feed.entries;
		      // console.log($scope.rssObjects);
		    }
		  });
		}



		// google.setOnLoadCallback(initialize);
	});