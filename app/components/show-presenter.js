import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update() {
      this.get('presenter').save();
      this.get('presenter').toggleProperty('isEditing');
    }
  }
});
