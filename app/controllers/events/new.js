import Ember from 'ember';

export default Ember.Controller.extend({
  artists: Ember.computed(function(){
    return [this.store.createRecord('artist')]
  }),
  presenter: Ember.computed(function(){
    return this.store.createRecord('presenter')
  }),
  allArtists: Ember.computed(function() {
    return this.store.findAll('artist');
  }),
  allPresenters: Ember.computed(function() {
    return this.store.findAll('presenter');
  }),
  actions: {
    handleAddArtist(artist){
      this.get('model.artists').pushObject(artist)
    },
    save() {
      this.get('presenter').save().then((presenter) => {
        this.get('model').set('presenter', presenter)
        this.get('model').save().then((event) => {
          //need to make conditional here for new or existing
          this.get('artists').map((artist) => {
            artist.get('events').pushObject(event)
            artist.save()
          })
        }).catch(reason);
      })
    }
  }
});
