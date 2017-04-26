app.factory('ZoneFact', function($http){

  return {
    getAll: function() {
      return $http.get(`http://localhost:3000/api/zones`)
        .then((val) => val.data )
      },
    getOne: function(id) {
        return $http.get(`http://localhost:3000/api/zones/${id}`)
          .then((val) =>  val.data )
      },
    add: function(newZone) {
      return $http.post(`http://localhost:3000/api/zones`, newZone)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`http://localhost:3000/api/zones/${id}`)
        .then((val) =>  val)
    },
    patch: function(updatedZone) {
      return $http.patch(`http://localhost:3000/api/zones`, updatedZone)
        .then((val) =>  val)
    }
  }
})
