import Ember from 'ember';

export default Ember.Component.extend({
store: Ember.inject.service(),
  results: Ember.computed('query', function(){
     return this.get('presenters').filter((selection) =>{
        let query = this.get('query').toLowerCase();
        return selection.get('name').toLowerCase().includes(query);
      });
  }),
  actions: {
    addPresenter(selection){
      this.attrs.onPresenterAdd(selection);
      this.$('input').val('');
    },
    addNewPresenter() {
      let store = this.get('store');
      let newPresenterName = this.$('input').val();
      let newPresenterObject = store.createRecord('presenter');
      newPresenterObject.set('name', newPresenterName);
      this.attrs.onPresenterAdd(newPresenterObject);
      this.$('input').val('');
    }
  }
});
