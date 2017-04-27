app.factory('ZookeeperFact', function($http){
  
  return {
    getAll: function() {
      return $http.get(`https://zoo-api-ls.herokuapp.com/api/zookeepers`)
        .then((val) => { 
          return val.data
        }) 
      },
    getOne: function(id) {
        return $http.get(`https://zoo-api-ls.herokuapp.com/api/zookeepers/${id}`)
          .then((val) =>  val.data)
      },
    add: function(newZookeeper) {
      return $http.post(`https://zoo-api-ls.herokuapp.com/api/zookeepers`, newZookeeper)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`https://zoo-api-ls.herokuapp.com/api/zookeepers/${id}`)
        .then((val) =>  val)
    },
    patch: function(updatedZookeeper) {
      return $http.patch(`https://zoo-api-ls.herokuapp.com/api/zookeepers`, updatedZookeeper)
        .then((val) =>  val)
    }
  }
})
