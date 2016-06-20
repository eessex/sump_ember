import Ember from 'ember';

export default Ember.Controller.extend({
  // results: Ember.computed('sortBy', function(){
  //   return model
  // }),
  // sortBy: "name",
  actions: {
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
      // var filtered = [];
      // var today = Date.now();
      var filtered = this.get('model').filterBy('upcoming', 'true');
      // events.forEach(filter);
      // function filter(event) {
      //   if (event.upcoming === true) {
      //     filtered.push(event);
      //   }
      // }
      // events.filterBy('upcoming', true);
      // debugger
      this.set('model', filtered);
    }
  }
});
