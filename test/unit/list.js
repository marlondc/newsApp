var expect = require('chai').expect;
var List = require('../../public/models/list').List;
var Story = require('../../public/models/story').Story;

describe(List, function() {

  var list;

  beforeEach(function() {
    list = new List(Story);
  });

  it('can create a new list', function() {
    expect(list).to.be.instanceOf(List);
  });

  it('starts with an empty list of stories', function() {
    expect(list.listOfStories).to.be.empty;
  });

  it('can add story objects into the array', function() {
    list.addStory('human needs to breath multiple times, every day', 'www.google.com');
    expect(list.listOfStories).to.not.be.empty;
  });

  it('displays the headlines', function() {
    list.addStory('human needs to breath multiple times, every day', 'www.google.com');
    expect(list.displayHeadlines()).to.eql("<ul><li id='1'><a onclick='summary(1)'>human needs to breath multiple times, every day</a></li></ul>")
  })

  it('finds the story by id', function() {
    list.addStory('woah', 'www.bbc.com');
    expect(list.findStoryById(2).title).to.eql('woah');
  })

})
