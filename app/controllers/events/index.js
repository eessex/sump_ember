import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  upcomingEvents: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'true').sortBy('date');
  }),
  pastEvents: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'false').sortBy('date');
  }),
});
