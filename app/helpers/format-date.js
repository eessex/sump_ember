import Ember from 'ember';
import moment from 'moment';

export function formatDate(date) {
  // return moment(date).format("MMM DD YYYY @ h.mma");
  return moment(date);
}

export default Ember.Helper.helper(formatDate);
