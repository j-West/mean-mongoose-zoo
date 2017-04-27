app.factory('AnimalFact', function($http) {

  return {

    getAll: function() {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/animals`)
        .then((val) =>  val.data)
    },
    getOne: function(id) {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/animals/${id}`)
        .then((val) => val.data)
    },
    add: function(newAnimal) {
      return $http.post(`https://zoo-api-ls.herokuapp.com/api/animals`, newAnimal)
        .then((val) => val.data)
    },

    remove: function(id) {
      return $http.delete(`https://zoo-api-ls.herokuapp.com/api/animals/${id}`)
        .then((val) => val.data)
    },

    update: (updateInfo) => {
      return $http.patch(`https://zoo-api-ls.herokuapp.com/api/animals`, updateInfo)
        .then((val) => val.data)
        // .catch((err) => console.log("err:", err))
    }

  }
});
