import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('event');
  },
  activate: function(){
    Ember.$('body').toggleClass("new-event")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("new-event")
  }
});
