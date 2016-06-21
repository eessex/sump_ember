import Ember from 'ember';

export default Ember.Component.extend({
  isVisible: Ember.computed.alias('event.enabled'),
  didInsertElement: function() {
    jQuery('li.reveal').last().addClass('last');
  },
  actions: {
    viewMore: function(event){
    let _that = jQuery('li#' + event.id)
    jQuery(_that).hide();
    jQuery(_that).toggleClass('active');
    jQuery('body').toggleClass('active');
    event.toggleProperty('showDetails', true);
    jQuery(_that).fadeIn();
    jQuery(_that).children('.event').children().hasClass('image', function() {
      alert('hi')
    })
    },
    revealSorting: function() {
      jQuery('.filters ul').on('click', function() {
      jQuery(this).children('ul').toggleClass('active');
      });
    },
  }
});
