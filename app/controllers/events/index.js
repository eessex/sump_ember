import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  upcomingEvents: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'true').sortBy('date');
  }),
  pastEvents: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'false').sortBy('date');
  }),
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
    },
    showUpcoming() {
      var filtered = this.get('model').filterBy('upcoming', 'true').sortBy('date');
      this.set('model', filtered);
    },
    showPast() {
      var filtered = this.get('model').filterBy('upcoming', 'past').sortBy('date');
      this.set('model', filtered);
    }
  }
});
