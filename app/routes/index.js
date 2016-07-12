import Ember from 'ember';
export default Ember.Route.extend( {
  model() {
    return this.store.findAll('event');
  },
  activate: function(){
    Ember.$('body').toggleClass("events index")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("events index")
  }
})
