angular.module('video-player')

.component('app', {
  controller: function($scope) {
    $scope.video = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    this.video = $scope.video;
    $scope.y = 2;

    console.log($scope.video);
    this.assignVideo = function(video) {
      console.log('hey!');
      this.video = video;
    };

    this.assignVideo = this.assignVideo.bind(this);
  },
  templateUrl: 'src/templates/app.html'
});

