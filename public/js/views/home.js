app.HomeView = Backbone.View.extend({

  initialize : function () {},

  className : 'jumbotron',

  render : function () {
    this.$el.html(this.template);
    return this;
  }
});