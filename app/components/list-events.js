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
