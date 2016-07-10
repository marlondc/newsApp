var expect = require('chai').expect;
var Story = require('../../public/models/story').Story;

describe(Story, function() {

  var story;

  beforeEach(function() {
    story = new Story('breaking news', 'www.google.com');
  });

  it('can create a new list', function() {
    expect(story).to.be.instanceOf(Story);
  });

  it('has a title property', function() {
    expect(story.title).to.eql('breaking news');
  });

  it('has a url property', function() {
    expect(story.url).to.eql('www.google.com');
  });


})
