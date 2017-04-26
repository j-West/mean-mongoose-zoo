app.controller('tricksFactory', function($http){
  console.log('Tricks');

  return {
    getAll: function() {
      return $http.get(`http://localhost:3000/api/tricks`)
      .then( val => val.data )
    },
    getOne: function(id) {
      return $http.get(`http://localhost:3000/api/tricks/${id}`)
      .then( val => val.data )
    },
    add: function(newTrick) {
      return $http.post(`http://localhost:3000/api/tricks`, newTrick)
      .then( val => val.data )
    },
    delete: function(id) {
      return $http.delete(`http://localhost:3000/api/tricks/${id}`)
      .then( val => val.data )
    },
    patch: function(updatedTrick) {
      return $http.patch(`http://localhost:3000/api/tricks`, updatedTrick)
      then( val => val.data )
    }

  }

})
