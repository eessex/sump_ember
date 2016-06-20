import Ember from 'ember';

export default Ember.Controller.extend({
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
    handleAddPresenter(selection){
     this.get('model').set('presenter', selection)
    },
    save() {
      if (this.get('model').get('presenter').get('name') != null ) {
        // delete the computed presenter
        this.get('presenter').save()
        this.get('model').save().then((event) => {
            this.get('artists').map((artist) => {
            artist.get('events').pushObject(event)
            artist.save()
          })
        }).catch(reason);
      } else {
      this.get('presenter').save().then((presenter) => {
      this.get('model').set('presenter', presenter)
        this.get('model').save().then((event) => {
          this.get('artists').map((artist) => {
            artist.get('events').pushObject(event)
            artist.save()
          })
        }).catch(reason);
    })
    }
    }
  }
});
