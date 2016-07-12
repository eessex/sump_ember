import Ember from 'ember';

export default Ember.Controller.extend({
  model() {
    var sorted = this.get('model').sortBy('name');
    this.set('model', sorted);
  },
});
