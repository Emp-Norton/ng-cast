angular.module('video-player')

.component('app', {
  controller: function() {
    this.video = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;

    this.selectVideo = function(video) {
      this.video = video;
    };
  },
  templateUrl: 'src/templates/app.html'
});
