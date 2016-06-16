import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  date: attr('date'),
  price: attr('string'),
  description: attr('string'),
  image: attr('string'),
  presenter_id: attr('string'),
  presenter: belongsTo('presenter'),
  artists: hasMany('artist')
});
