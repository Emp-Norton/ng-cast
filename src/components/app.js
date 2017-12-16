angular.module('video-player')

.component('app', {
  controller: function($scope) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    $scope.video = window.exampleVideoData[0];
    this.assignVideo = function(video) {
      console.log('hey!');
      this.video = video;
    };

    this.assignVideo = this.assignVideo.bind(this);
  },
  templateUrl: 'src/templates/app.html'
});

