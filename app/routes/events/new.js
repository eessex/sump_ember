import Ember from 'ember';

const RSVP = Ember.RSVP;
const get = Ember.get;
const set = Ember.set;

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('event');
  },
  actions: {
      closeModal: function() {
        this.transitionToProject();
      },
      addImage: function(title, description, file) {
        this.store.findRecord('event',
          this.paramsFor('event').event_id).then(
          (event) => {
            var image = this.store.createRecord('image', {
              title: title,
              description: description,
              event: event
            });

            RSVP.cast(Ember.$.get('http://localhost:3000/api/v1/s3_direct')).then((response) => {
              return file.upload(response.url, {
                data: response.credentials
              });
            }).then((response) => {
              set(image, 'source', response.headers.Location);
              image.save().then(() => {
                Ember.Logger.log("save successful");
                this.transitionToProject();
              });
            }), function() {
              Ember.Logger.log("save was not successful")
              image.rollback();
            };
        });
      }
    }
});
