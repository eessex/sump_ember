import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update() {
      this.get('event').save();
      this.get('event').toggleProperty('isEditing');
    }
  }
});
