app.factory('ZoneFact', function($http){

  return {
    getAll: function() {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/zones`)
        .then((val) => val.data )
      },
    getOne: function(id) {
        return $http.get(`https://zoo-api-ls.herokuapp.com/api/zones/${id}`)
          .then((val) =>  val.data )
      },
    add: function(newZone) {
      return $http.post(`https://zoo-api-ls.herokuapp.com/api/zones`, newZone)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`https://zoo-api-ls.herokuapp.com/api/zones/${id}`)
        .then((val) =>  val)
    },
    patch: function(updatedZone) {
      return $http.patch(`https://zoo-api-ls.herokuapp.com/api/zones`, updatedZone)
        .then((val) =>  val)
    }
  }
})
