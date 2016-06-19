import Ember from 'ember';

export default Ember.Component.extend({
  results: Ember.computed('query', function(){
     return this.get('presenters').filter((selection) =>{
        let query = this.get('query').toLowerCase()
        return selection.get('name').toLowerCase().includes(query)
      })
  }),
  actions: {
    addPresenter(selection){
      this.attrs.onPresenterAdd(selection);
      this.$('input').val('');
    },
  }
});
