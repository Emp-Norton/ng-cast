angular.module('video-player')

.component('search', {
  bindings: {
    handleSearch: '<'
  },
  controller: function($scope, youTube) {
    this.search = youTube.search;
  },

  templateUrl: 'src/templates/search.html'
});
