import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewMore: function(event){
      let _that = jQuery('li#' + event.id)
      jQuery(_that).hide();
      jQuery(_that).toggleClass('active');
      jQuery('body').toggleClass('active');
      event.toggleProperty('showDetails', true);
      jQuery(_that).fadeIn();
    },
  }
});
