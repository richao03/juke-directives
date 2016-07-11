'use strict';

juke.directive('albumList', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/list/list-template.html',
    scope: {
      myalbums: "="
    },
    link: function (scope, element, attrs) {
      console.log(scope.myalbums);

    }
  };
});
