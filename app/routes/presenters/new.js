import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('presenter');
  },
  actions: {
    save() {
      let presenter = this.modelFor(this.routeName);
      presenter.save().then((response) => {
        this.transitionTo('presenters.presenter', presenter)
      }).catch(reason)
    }
  }
});
