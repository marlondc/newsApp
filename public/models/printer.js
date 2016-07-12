function displayHeadlines(listObject) {
  var htmlString = "<ul>";
  listObject.listOfStories.forEach(function(story) {
    htmlString += "<li id='" + story.id + "'><a onclick='readStory(" + story.id + ", 0)'>" + story.title + "</a></li>";
  });
  return htmlString += "</ul>";
}
