import Ember from 'ember';

export default Ember.Component.extend({
  query: "",
  // didInsertElement(){
  //   insert any jquery funtions with this.$('.artist')
  // },
  results: Ember.computed('query', function(){
    if(this.get('query') === ''){
      return this.get('artists')
    }

    return this.get('artists').filter((artist) =>{
        let query = this.get('query')
        console.log(artist.get('name').includes(query))
        return artist.get('name').includes(query)
      })
  }),
  actions: {
    showMatches: function(){
      this.$('.artist').parent().addClass('active');
      this.$('.artist').on('click', function() {
        let selection = $(this).text()
        $(this).parent().siblings().val(selection)
        $(this).parent().removeClass('active');
      })
    }
  //   filterArtists(query){
  //     let result = this.get('artists').filter((artist) =>{
  //       console.log(artist.get('name').includes(query))
  //       return artist.get('name').includes(query)
  //     })
  //     this.set('artists', result)
  //   }
  }
});
