import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function(){
    Ember.$('.id-5').hide();
  },
  showDetails: false,
  actions: {
    viewMore: function(event){
      if (event.get('image') == null) {
        Ember.$('.event-details').addClass('no-img')
      }
      this.set("currentEvent", event)
      Ember.$('.event-details').hide()
      Ember.$('footer').hide()
      this.toggleProperty('showDetails')
      Ember.$('.event-details').fadeIn()
    },
    goToIndexPage(){
      Ember.$('.event-details').fadeOut()
      Ember.$('footer').fadeIn()
      Ember.$('.event-details').removeClass('no-img')
      this.set("currentEvent", null)
      this.toggleProperty('showDetails')
    },
    goToArtistPage(artist){
      this.set("currentEvent", null)
      Ember.$('.event-details').removeClass('no-img')
      Ember.$('footer').fadeIn()
      this.toggleProperty('showDetails')
      this.attrs.onFinishArtistCleanUp(artist)
    },
    goToPresenterPage(presenter){
      this.set("currentEvent", null)
      Ember.$('.event-details').removeClass('no-img')
      Ember.$('footer').fadeIn()
      this.toggleProperty('showDetails')
      this.attrs.onFinishPresenterCleanUp(presenter)
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
