import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sortByName() {
      var sorted = this.get('model').sortBy('name');
      this.set('model', sorted);
    },
    sortByDate() {
      var sorted = this.get('model').sortBy('date');
      this.set('model', sorted);
    },
    sortByPresenter() {
      var sorted = this.get('model').sortBy('presenter.name');
      this.set('model', sorted);
    }
  }
});
