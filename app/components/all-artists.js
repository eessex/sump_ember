import Ember from 'ember';

export default Ember.Component.extend({
  query: "",
  results: Ember.computed('query', function(){
    if(this.get('query') === ''){
      return this.get('artists')
    }

    return this.get('artists').filter((artist) =>{
        let query = this.get('query')
        return artist.get('name').toLowerCase().includes(query)
      })
  }),
  actions: {
    addArtist(artist){
      this.get('event.artists').pushObject(artist)
    },
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
