import Ember from 'ember';

export default Ember.Component.extend({
  isVisible: Ember.computed.alias('event.enabled'),
  didInsertElement: function() {
    jQuery('li.reveal').last().addClass('last');  
    // jQuery('li.reveal').on('click', function() {
    //   jQuery('li.reveal').removeClass('active');
    //   jQuery('li.reveal').children(".ember-view").slideUp()
    //   jQuery(this).children(".ember-view").slideUp()
    // })   
  },
  actions: {
    viewMore: function(event){
    let _that = jQuery('li#' + event.id)
    jQuery(_that).hide();
    jQuery(_that).toggleClass('active');
    event.toggleProperty('showDetails', true);
    jQuery(_that).fadeIn();
    }
  }
});
