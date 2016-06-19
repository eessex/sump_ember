import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  results: Ember.computed('query', function(){
    return this.get('artists').filter((selection) =>{
        let query = this.get('query').toLowerCase()
        return selection.get('name').toLowerCase().includes(query)
      })
  }),
  actions: {
    addArtist(selection){
      this.attrs.onArtistAdd(selection);
      this.$('input').val('');
    },
    addNewArtist(){
      let store = this.get('store');
      //get name of artist
      let newArtistName = this.$('input').val()
      //set name to empty object from new controler
      let newArtistObject = store.createRecord('artist');
      newArtistObject.set('name', newArtistName)
      newArtistObject.save()
      //push object into models artist array
    }
    // showMatches: function(){
    //   let _that = this;
    //   this.$('.artist').parent().addClass('active');
    //   this.$('.artist').on('click', function() {
    //     let selection = $(this).text()
    //     debugger
    //     // _that.get('event.artists').createRecord({name: selection})
    //     $(this).parent().siblings().val(selection)
    //     $(this).parent().removeClass('active');
    //   })
    // }
  }
});
