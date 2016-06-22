import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  allPresenters: Ember.computed(function() {
    let store = this.get('store');
    return store.findAll('presenter');
  }),
  allArtists: Ember.computed(function() {
    let store = this.get('store');
    return store.findAll('artist');
  }),
  actions: {
    handleAddPresenter(selection){
     this.get('event').set('presenter', selection)
     selection.save();
   },
   handleAddArtist(artist){
     this.get('event.artists').pushObject(artist)
   },
    update() {
      this.get('event').save();
      this.get('event').toggleProperty('isEditing');
    }
  }
});
