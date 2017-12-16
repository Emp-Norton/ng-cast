angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    assignVideo: '&'
  },

  controller: function ($scope) {
    this.clickHandler = (video) => {
      $scope.$parent.$parent.$parent.video = video;
    };
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
