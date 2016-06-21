import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist');
  },
  activate: function(){
    Ember.$('body').toggleClass("artists index")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("artists index")
  }
});
