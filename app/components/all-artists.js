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
    showMatches: function(){
      this.$('.artist').parent().addClass('active');
      this.$('.artist').on('click', function() {
        let selection = $(this).text()
        $(this).parent().siblings().val(selection)
        $(this).parent().removeClass('active');
      })
    }
  }
});
