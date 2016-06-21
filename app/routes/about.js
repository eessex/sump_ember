import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    Ember.$('body').toggleClass("about")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("about")
  }
});
