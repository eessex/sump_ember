import Ember from 'ember';

export default Ember.Controller.extend({
  upcoming: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'true').sortBy('date');
  }),
  upcomingCount: Ember.computed(function() {
debugger
     this.get('model').filterBy('upcoming', 'true').get('length');
  }),
  past: Ember.computed(function() {
    return this.get('model').filterBy('upcoming', 'false');
  }),
  actions: {
    transitionToArtist(artist){
      this.transitionToRoute('artists.artist', artist);
    },
    transitionToPresenter(presenter){
      this.transitionToRoute('presenters.presenter', presenter);
    }
  }
});
