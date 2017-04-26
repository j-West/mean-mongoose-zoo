app.factory('AnimalFact', function($http) {

  return {

    getAll: function() {
      return $http.get(`http://localhost:3000/api/animals`)
        .then((val) =>  val.data)
    },
    getOne: function(id) {
      return $http.get(`http://localhost:3000/api/animals/${id}`)
        .then((val) => val.data)
    },
    add: function(newAnimal) {
      return $http.post(`http://localhost:3000/api/animals`, newAnimal)
        .then((val) => val.data)
    },

    remove: function(id) {
      return $http.delete(`http://localhost:3000/api/animals/${id}`)
        .then((data) => val.data)
    },

    update: (updateInfo) => {
      return $http.patch(`http://localhost:3000/api/animals`, updateInfo)
        .then((val) => val.data)
        // .catch((err) => console.log("err:", err))
    }

  }
});
