import Ember from 'ember';

export default Ember.Component.extend({
  // query: "",
  results: Ember.computed('query', function(){
     return this.get('presenters').filter((selection) =>{
         let query = this.get('query').toLowerCase()
        return selection.get('name').toLowerCase().includes(query)
      })
  }),
  actions: {
    addPresenter(selection){
      this.attrs.onPresenterAdd(selection)
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
