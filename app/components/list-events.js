import Ember from 'ember';

export default Ember.Component.extend({
  // sortProperties: ['name', 'date', 'presenter.name', 'upcoming'],
  // sortAscending: true,

  isVisible: Ember.computed.alias('event.enabled'),
  didInsertElement: function() {
  },
  actions: {
      viewMore: function(event){
      let header = jQuery('li#' + event.id);
      let eventBody = header.next();
        jQuery(header).toggleClass('active');
        jQuery('body').addClass('active');      
        jQuery(eventBody).hide();
        jQuery(eventBody).toggleClass('active');
        event.toggleProperty('showDetails', true);
        jQuery(eventBody).fadeIn();
        jQuery(header).children('.toggle-it').fadeIn();
      },


    sortByName() {
      var sorted = this.get('model').sortBy('name');
      this.set('model', sorted);
    },
    sortByDate() {
      var sorted = this.get('model').sortBy('date');
      this.set('model', sorted);
    },
    sortByPresenter() {
      var sorted = this.get('model').sortBy('presenter.name');
      this.set('model', sorted);
    },
    showUpcoming() {
      var filtered = this.get('model').filterBy('upcoming', 'true').sortBy('date');
      this.set('model', filtered);
    },
    showPast() {
      var filtered = this.get('model').filterBy('upcoming', 'false').sortBy('date');
      this.set('model', filtered);
    }
  }
});
