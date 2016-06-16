import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    presenter: { embedded: 'always' }
  }
});
