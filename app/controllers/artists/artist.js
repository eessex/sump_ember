import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // viewMore: function(event){
    //   this.set("currentEvent", null)
    //   this.toggleProperty('showDetails')
    // },
    transitionToArtist(artist){
      this.transitionToRoute('artists.artist', artist)
    },
    transitionToPresenter(presenter){
      this.transitionToRoute('presenters.presenter', presenter)
    }
  }
});
