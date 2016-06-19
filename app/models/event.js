import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  date: attr(),
  price: attr('number'),
  description: attr('string'),
  image: attr('string'),
  presenter: belongsTo('presenter'),
  artists: hasMany('artist'),
  images: hasMany('image')
});
