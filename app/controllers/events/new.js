import Ember from 'ember';

export default Ember.Controller.extend({
  artists: Ember.computed(function(){
    return [this.store.createRecord('artist')]
  }),
  presenter: Ember.computed(function(){
    return this.store.createRecord('presenter')
  }),
  actions: {
    save() {
      this.get('presenter').save().then((presenter) => {
        this.get('model').set('presenter', presenter)
        this.get('model').save().then((event) => {
          this.get('artists').map((artist) => {
            artist.get('events').pushObject(event)
            artist.save()
          })
        }).catch(reason);
    })
    }
  }
});
