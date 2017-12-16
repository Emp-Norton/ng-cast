angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    assignVideo: '&'
  },

  controller: function ($scope) {
    this.clickHandler = (video) => {
      $scope.$parent.x = video;
      console.log($scope);
    };
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
