app.factory('zonesFactory', function($http){
  console.log('Zones Factory');

  return {
    getAll: function() {
      return $http.get(`http://localhost:3000/api/zones`)
      .then((val) => {
        return val.data
      })
    },

    getOne: function(id) {
      return $http.get(`http://localhost:3000/api/zones/${id}`)
      .then((val) => {
        return val.data
      })
    }
  }

})
