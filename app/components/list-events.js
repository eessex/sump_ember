import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    viewMore: function(event){
     event.toggleProperty('showDetails', true);
    }
  }
});
