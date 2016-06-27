import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    edit() {
      let event = this.get('model')
      event.toggleProperty('isEditing');
      console.log(event.isEditing)
    },
    goToArtistPage(artist){
      this.set('showDetails', false);
      this.transitionToRoute("artists.artist", artist);
    },
    goToPresenterPage(presenter){
      this.set('showDetails', false);
      this.transitionToRoute("presenters.presenter", presenter);
    }
  },
  showDetails: false
});
