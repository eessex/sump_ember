import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;

export default Base.extend({
 tokenEndpoint: `${config.host}/api/v1/knock/auth_token`,
 restore(data) {
   return new Promise((resolve, reject) => {
     if (!Ember.isEmpty(data.token)) {
       resolve(data);
     } else {
       reject();
     }
   });
 },
 authenticate(creds) {
   const { email, password } = creds;
   const data = JSON.stringify({
     auth: {
       email: email,
       password
     }
   });
   const requestOptions = {
     url: this.tokenEndpoint,
     type: 'POST',
     data,
     contentType: 'application/json',
     dataType: 'json'
   };
   return new Promise((resolve, reject) => {
     ajax(requestOptions).then((response) => {
       const { jwt } = response;
       // Wrapping async operation in Ember.run
       run(() => {
         resolve({
           token: jwt
         });
       });
     }, (error) => {
       // Wrapping async operation in Ember.run
       run(() => {
         reject(error);
       });
     });
   });
 },
 invalidate(data) {
   return Promise.resolve(data);
 }
});
