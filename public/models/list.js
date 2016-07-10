(function(exports) {

  function List(Story) {
    this.Story = Story;
    this.listOfStories = [];
  }

  List.prototype = {
    addStory: function(title, url) {
      var article = new this.Story(title, url);
      this.listOfStories.push(article)
    },

    displayHeadlines: function() {
      var htmlString = "<ul>"
      this.listOfStories.forEach(function(story) {
        htmlString += "<li id='" + story.id + "'><a onclick='readStory(" + story.id + ", 0)'>" + story.title + "</a></li>";
      });
      return htmlString += "</ul>";
      console.log(htmlString);
    },

    findStoryById: function(taskId) {
      var filteredTasks = this.listOfStories.filter(function(task) {
        return task.id === taskId;
      });
      return filteredTasks[0];
    },
  }

  exports.List = List;

}(this))
