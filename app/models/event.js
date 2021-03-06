import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  date: attr('string'),
  price: attr('number'),
  description: attr('string'),
  image: attr('string'),
  url: attr('string'),
  upcoming: attr('string'),
  presenter: belongsTo('presenter'),
  artists: hasMany('artist')
});
