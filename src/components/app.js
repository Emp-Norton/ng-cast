angular.module('video-player')

.component('app', {
  controller: ['youTube', function($scope, youTube) {
      console.log($scope.search);
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
  
      // this.search = (query, max = 5) => {
      //   var context = this;
      //   $http({
      //     method: 'GET',
      //     url: 'https://www.googleapis.com/youtube/v3/search',
      //     params: {
      //       part: 'snippet',
      //       q: query, 
      //       key: window.YOUTUBE_API_KEY,
      //       maxResults: max,
      //     }
      //   }).then(function successCallback(response) {
      //     console.log('Success ', response); 
      //     context.videos = response.data.items;
      //     context.currentVideo = context.videos[0];
          
      //     return response.data.items;
          
      //   }, function errorCallback(response) {
      //     console.log('Failed ', response);
      //   });    
      // };

      this.handleSearch = (responseData) => {
        this.videos = responseData
      };
  
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
  
      this.videos = $scope.search('', this.handleSearch);  
    }],

  templateUrl: 'src/templates/app.html'
});

