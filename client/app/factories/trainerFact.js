app.factory('TrainerFact', function($http){
  
  return {
    getAll: function() {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/trainers`)
        .then((val) => { 
          return val.data
        }) 
      },
    getOne: function(id) {
        return $http.get(`https://zoo-api-ls.herokuapp.com/api/trainers/${id}`)
          .then((val) =>  val.data)
      },
    add: function(newTrainer) {
      return $http.post(`https://zoo-api-ls.herokuapp.com/api/trainers`, newTrainer)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`https://zoo-api-ls.herokuapp.com/api/trainers/${id}`)
        .then((val) =>  val.data)
    },
    patch: function(updatedTrainer) {
      return $http.patch(`https://zoo-api-ls.herokuapp.com/api/trainers`, updatedTrainer)
        .then((val) =>  val.data)
    }
  }
})
