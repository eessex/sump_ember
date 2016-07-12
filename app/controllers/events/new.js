import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  allArtists: Ember.computed(function() {
    return this.store.findAll('artist');
  }),
  allPresenters: Ember.computed(function() {
    return this.store.findAll('presenter');
  }),
  actions: {
    imageUploadComplete: function(details) {
      this.get('model').set('image', details["fullUrl"]);
    },
    handleAddArtist(artist){
      this.get('model.artists').pushObject(artist);
    },
    removeArtist(artist) {
      this.get('model.artists').popObject(artist);
    },
    handleAddPresenter(selection){
     this.get('model').set('presenter', selection)
     selection.save()
    },
    removePresenter(presenter) {
      this.get('model.presenter').popObject(presenter);
    },
    save() {
      this.get('model').save().then((event) => {
        event.get('artists').map((artist) => {
          artist.get('events').pushObject(event)
          artist.save();
          this.transitionToRoute('events.event', event);
        })
      }).catch(reason);
    }
  }
});
