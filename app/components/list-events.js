import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    jQuery('li.reveal').last().addClass('last');    
  },
  actions: {
    viewMore: function(event){
     jQuery('li.reveal').removeClass('active');
     jQuery('li#' + event.id).toggleClass('active');
     event.toggleProperty('showDetails', true);
    }
  }
});
