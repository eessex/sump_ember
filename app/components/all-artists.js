import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  results: Ember.computed('query', function(){
    return this.get('artists').filter((selection) =>{
        this.$('ul.results').slideDown();
        let query = this.get('query').toLowerCase();
        return selection.get('name').toLowerCase().includes(query);
      });
  }),
  actions: {
    addArtist(selection){
      this.attrs.onArtistAdd(selection);
      this.$('input').val('');
      this.$('ul.results').slideUp();
    },
    addNewArtist(){
      let store = this.get('store');
      let newArtistName = this.$('input').val();
      let newArtistObject = store.createRecord('artist');
      newArtistObject.set('name', newArtistName);
      this.attrs.onArtistAdd(newArtistObject);
      this.$('input').val('');
    }
  }
});
