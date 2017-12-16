angular.module('video-player')
.component('videoList', {
  bindings: {
    assignVideo: '&',
    videos: '<'
  },

  controller: function ($scope) {
    $scope.x = 1;
  },


  templateUrl: 'src/templates/videoList.html'
});
