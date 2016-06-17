import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    edit() {
      let presenter = this.get('model');
      presenter.toggleProperty('isEditing');
      console.log(presenter.isEditing);
    },
    update(properties) {
      let presenter = this.get('model');
      presenter.set(properties);
      presenter.save();
    }
  }
});
