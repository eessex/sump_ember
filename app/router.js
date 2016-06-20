import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('event', { path: '/:event_id'});
  });
  this.route('artists', function() {
    this.route('artist', { path: '/:artist_id'});
  });
  this.route('presenters', function() {
    this.route('presenter', { path: '/:presenter_id'});
    this.route('new');
  });
  this.route('login');
  this.route('about');
});

export default Router;
