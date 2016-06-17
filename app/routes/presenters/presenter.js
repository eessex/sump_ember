import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.peekRecord('presenter', params.presenter_id);
  },
  actions: {
    edit() {

    },
    delete() {
      let presenter = this.currentModel;
      presenter.deleteRecord();
      presenter.save().then(() => {
        this.transitionTo('presenters');
      });
    }
  }
});
