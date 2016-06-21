import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('presenter');
  },
  activate: function(){
    Ember.$('body').toggleClass("presenter")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("presenter")
  }
});
