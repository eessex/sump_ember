import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  menuActive: false,
  actions: {
    menu() {
      $('nav#main ul').fadeToggle();
      this.toggleProperty('menuActive');
    },
  }
});
