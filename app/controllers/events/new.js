import Ember from 'ember';

export default Ember.Controller.extend({
  allArtists: Ember.computed(function() {
    return this.store.findAll('artist');
  }),
  allPresenters: Ember.computed(function() {
    return this.store.findAll('presenter');
  }),
  actions: {
    imageUploadComplete: function(details) {
      this.get('model').set('image', details["fullUrl"])
    },
    handleAddArtist(artist){
      this.get('model.artists').pushObject(artist)
    },
    handleAddPresenter(selection){
     this.get('model').set('presenter', selection)
     selection.save()
    },
    save() {
      this.get('model').save().then((event) => {
        event.get('artists').map((artist) => {
          artist.get('events').pushObject(event)
          artist.save();
        })
      }).catch(reason);
    }
  }
});
