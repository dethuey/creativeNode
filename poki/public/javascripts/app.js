var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher($http) {

  var API_ROOT = 'pokemon'
  return {
    get: function() {
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl($scope, pokemonFetcher, $http) {

  $scope.pokemon = []

  pokemonFetcher.get()
    .then(function(data) {
      $scope.pokemon = data
    })

  $scope.addPoki = function() {
    var formData = { avatarUrl: $scope.text };
    //console.log(formData);
    var pokiURL = 'pokemon';
    $http({
      url: pokiURL,
      method: "POST",
      data: formData
    }).success(function(data, status, headers, config) {
      //console.log("Post worked");
    }).error(function(data, status, headers, config) {
      //console.log("Post failed");
    });
    location.reload();

  }
  $scope.removePoki = function(y) {
    var formData = { avatarUrl: $scope.index };
    console.log(formData);
    var pokiURL = 'pokemon';
    $scope.pokemon.splice(y, 1);
    $http({
      url: pokiURL,
      method: "DELETE",
      data: formData
    }).success(function(data, status, headers, config) {
      console.log("Delete worked");
    }).error(function(data, status, headers, config) {
      console.log("Delete failed");
    });
    //location.reload();
  };
}
