angular.module('video-player', []) // named and listed empty array as depende
.service('youTube', function($http) {
  this.search = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        maxResult: 5,
        part: 'snippet',
        q: query,
        type: 'video',
        key: window.YOUTUBE_API_KEY
      },
    }).then(function (response) {
      callback(response.data.items);
    });
  };
});
