NewsReader.Models.Entry = Backbone.Model.extend({
  initialize: function(options) {
    this.feed = options.feed
  },
  urlRoot: function() {
    this.feed.url + "/"  
  }
})
