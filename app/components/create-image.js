import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function() {
      this.sendAction("closeModal");
    },
    addImage: function(file) {
      let title = this.get('title') || file.get('name');
      let description = this.get('description');
      // let route = this.get('currentRouteName');
      this.sendAction("addImage", title, description, file);
    }
  }
});
