var articles = [];

var selectArticle =function(article){
	var selectedArticle = articles[article];
	var output = "";
	output += "<img src='"+selectedArticle.image+"'>";
	output += "<h4><strong>"+selectedArticle.article.title+"</strong></h4>";
	output += "<div class='ui-grid-a'>";
	output += "<div class='ui-block-a'><a href='#feed' data-transition='flip'><button class='ui-btn'>Back to feed</button></a></div>";
	output += "<div class='ui-block-b'><a href='"+selectedArticle.article.link+"' data-transition='flip'><button class='ui-btn'>View original</button></a></div>";
	output += "</div>";
	document.getElementById("singleArticleContainer").innerHTML = output;
}

var updateFeed = function(filter){
	var output = "";
	for(article in articles){
		var outputRow = "";
		outputRow += "<a href='#article' data-transition='flip' onclick='selectArticle("+article+")'>";
		outputRow += "<div class='row articleRow'>";
		outputRow += "<div class='background-image' style='background-image:url("+articles[article].image+")'></div>";
		outputRow += "<div class='content'>";

		outputRow += "<h4 class='articleHeadline'>"+articles[article].article.title+"</h4>";
		
		outputRow += "</div>";
		outputRow += "</div>";
		outputRow += "</a>";
		
		if(filter === "*"){
			output += outputRow;
		} else if($.inArray(filter,articles[article].article.categories) > -1){
			output += outputRow;
		}
	}
	document.getElementById('articlesContainer').innerHTML = output;
}

var addArticle = function(article){
	articles.push(article);
}