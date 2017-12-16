angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  controller: function($sce) {
    this.formUrl = function(video) {
      var url = 'https://www.youtube.com/embed/' + this.video.id.videoId;
      return $sce.trustAsResourceUrl(url);
    };
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
