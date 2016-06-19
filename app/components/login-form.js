import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
 session: service('session'),


 actions: {
   submit(){
     let creds = this.getProperties('email', 'password');
     this.attrs.triggerAuthenticate(creds);
    }
  }
});
