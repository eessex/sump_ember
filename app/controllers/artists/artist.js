import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToArtist(artist){
      this.transitionToRoute('artists.artist', artist);
    },
    transitionToPresenter(presenter){
      this.transitionToRoute('presenters.presenter', presenter);
    }
  }
});
