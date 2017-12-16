angular.module('video-player')

.component('videoListEntry', {
  bindings: { 
    video: '<',
    select: '<'
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
