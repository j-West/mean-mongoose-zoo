app.controller('tricksFactory', function($http){
  console.log('Tricks');

  return {
    getAll: function() {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/tricks`)
      .then( val => val.data )
    },
    getOne: function(id) {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/tricks/${id}`)
      .then( val => val.data )
    },
    add: function(newTrick) {
      return $http.post(`https://zoo-api-ls.herokuapp.com/api/tricks`, newTrick)
      .then( val => val.data )
    },
    delete: function(id) {
      return $http.delete(`https://zoo-api-ls.herokuapp.com/api/tricks/${id}`)
      .then( val => val.data )
    },
    patch: function(updatedTrick) {
      return $http.patch(`https://zoo-api-ls.herokuapp.com/api/tricks`, updatedTrick)
      then( val => val.data )
    }

  }

})
