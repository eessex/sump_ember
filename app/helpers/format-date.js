import Ember from 'ember';
import moment from 'moment';

export function formatDate(params) {
  var format = params[0];
  var date = params[1];
  return moment(date).format(format);
}

export default Ember.Helper.helper(formatDate);
