import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  onComplete: 'onComplete',

  filesDidChange: function() {
    
    let uploadUrl = this.get('url'),

    files = this.get('files'),
    _this = this,
    uploader = EmberUploader.S3Uploader.create({
      url: "http://localhost:3000/api/v1/sign"
    });

    uploader.on('didUpload', function(response) {
      let res = $(response),
        fullUrl = decodeURIComponent(res.find('Location')[0].textContent),
        key = decodeURIComponent(res.find('Key')[0].textContent);
      
      _this.sendAction('onComplete', {fullUrl: fullUrl, key: key}); 

    });

    if (!Ember.isEmpty(files))
      uploader.upload(files[0]);
  }.observes('files')
});
