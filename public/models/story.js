(function(exports) {
  var idCounter = 0;
  function Story(title, url) {
    this.title = title;
    this.url = url;
    this.id = idCounter++;
  }

  exports.Story = Story;

}(this))
