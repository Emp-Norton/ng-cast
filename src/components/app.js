angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.handleSearch = (responseData) => {
      this.videos = responseData;
      this.currentVideo = this.videos[0];
    };

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };

    // this.videos = youTube.search('', this.handleSearch);
  },

  templateUrl: 'src/templates/app.html'
});

