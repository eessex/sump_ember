import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.peekRecord('event', params.event_id);
  },
  actions: {
    delete() {
      let event = this.currentModel;
      event.deleteRecord();
      event.save().then(() => {
        this.transitionTo('events');
      });
    }
  }
});
