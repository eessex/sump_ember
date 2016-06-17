import Ember from 'ember';

export default Ember.Component.extend({
  query: "",
  results: Ember.computed('query', function(){
    if(this.get('query') === ''){
      return this.get('presenters')
    }
    return this.get('presenters').filter((presenter) =>{
      let query = this.get('query')
      return presenter.get('name').toLowerCase().includes(query)
    })
  }),
    actions: {
    showMatches: function(){
      this.$('.presenter').parent().addClass('active');
      this.$('.presenter').on('click', function() {
        let selection = $(this).text()
        $(this).parent().siblings().val(selection)
        $(this).parent().removeClass('active');
      })
    }
  }
});
