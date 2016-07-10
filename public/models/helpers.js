function loadStories() {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI('https://content.guardianapis.com/search?api-key=b6e2b7b6-d468-408a-a65c-7f2d086c7e17'));
  request.onreadystatechange = function(response) {
    if (request.readyState === 4) {
      var json = JSON.parse(request.response);
      var array = json.response.results;
      for (var i = 0; i < array.length; i++) {
        storyList.addStory(array[i].webTitle, array[i].webUrl);
      }
    list.innerHTML = storyList.displayHeadlines();
    console.log(storyList.listOfStories[6].url);
    }
  };
  request.send();
}


function readStory(storyId, length) {
  var story = storyList.findStoryById(storyId);
  var readRequest = new XMLHttpRequest();
  readRequest.open('GET', encodeURI('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + story.url));
  readRequest.onreadystatechange = function(response) {
    if (readRequest.readyState === 4) {
      if(length === 0) {
        var json = JSON.parse(readRequest.response).sentences;
        document.getElementById('summaries').innerHTML = json + "<br><button onclick='readStory(" + storyId + ", 1)'>Read Full Story</button>";
      } else {
        var fullJson = JSON.parse(readRequest.response).text;
        document.getElementById('summaries').innerHTML = fullJson;
      }
    }
  };
  readRequest.send();
}
