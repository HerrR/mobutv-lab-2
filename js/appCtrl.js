var articles = [];

var selectArticle =function(article){
	var selectedArticle = articles[article];
	var output = "";
	output += "<img src='"+selectedArticle.image+"'>";
	output += "<h4>"+selectedArticle.article.title+"</h4>";
	output += "<div class='ui-grid-a'>";
	output += "<div class='ui-block-a'><a href='#feed' data-transition='flip'><button class='ui-btn'>Back to feed</button></a></div>";
	output += "<div class='ui-block-b'><a href='"+selectedArticle.article.link+"' data-transition='flip'><button class='ui-btn'>Read original</button></a></div>";
	output += "</div>";

	document.getElementById("singleArticleContainer").innerHTML = output;
}

var addArticle = function(article){
	articles.push(article);
}