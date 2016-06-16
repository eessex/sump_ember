import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      event: this.store.createRecord('event'),
      artists: this.store.findAll('artist'),
      presenters: this.store.findAll('presenter')
    })
  },
  actions: {
    save() {
      let event = this.modelFor(this.routeName);
      event.save().then((response)=>{
        this.transitionTo('events.event', event);
      }).catch(reason);
    },
  }
});
