import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    edit() {
      let event = this.get('model')
      event.toggleProperty('isEditing');
      console.log(event.isEditing)
    },
  },
  showDetails: false
});
