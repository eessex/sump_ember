import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  edit() {
    let event = this.get('model') //'event' ?
    event.toggleProperty('isEditing');
    console.log(event.isEditing)
  }
}
});
