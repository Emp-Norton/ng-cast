angular.module('video-player')
.component('videoList', {
  bindings: {
    assignVideo: '&',
    videos: '<'
  },

  controller: function () {
  },


  templateUrl: 'src/templates/videoList.html'
});
