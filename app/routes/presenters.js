import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('presenter');
  },
  activate: function(){
    Ember.$('body').toggleClass("presenters index")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("presenters index")
  }
});
