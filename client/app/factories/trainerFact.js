app.factory('TrainerFact', function($http){
  
  return {
    getAll: function() {
      return $http.get(`http://localhost:3000/api/trainers`)
        .then((val) => { 
          return val.data
        }) 
      },
    getOne: function(id) {
        return $http.get(`http://localhost:3000/api/trainers/${id}`)
          .then((val) =>  val.data)
      },
    add: function(newTrainer) {
      return $http.post(`http://localhost:3000/api/trainers`, newTrainer)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`http://localhost:3000/api/trainers/${id}`)
        .then((val) =>  val)
    },
    patch: function(updatedTrainer) {
      return $http.patch(`http://localhost:3000/api/trainers`, updatedTrainer)
        .then((val) =>  val)
    }
  }
})
