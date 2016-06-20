import Ember from 'ember';

export function formatDate(date) {
 return moment(date).format("MMM DD YYYY @ h.mma");
}

export default Ember.Helper.helper(formatDate);