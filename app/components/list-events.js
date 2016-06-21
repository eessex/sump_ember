import Ember from 'ember';

export default Ember.Component.extend({
  isVisible: Ember.computed.alias('event.enabled'),
  didInsertElement: function() {
  },
  actions: {
      viewMore: function(event){
      let _that = jQuery('li#' + event.id)
      jQuery(_that).hide();
      jQuery(_that).toggleClass('active');
      jQuery('body').toggleClass('active');
      event.toggleProperty('showDetails', true);
      jQuery(_that).fadeIn();
            debugger
     jQuery('.event.show').children().length


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
