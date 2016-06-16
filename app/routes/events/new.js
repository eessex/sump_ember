import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('event');
  },
  actions: {
    save() {
      let event = this.modelFor(this.routeName);
      event.save().then((response)=>{
        this.transitionTo('events.event', event);
      }).catch(reason);
    }
  }
});
