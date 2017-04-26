app.factory('ZookeeperFact', function($http){
  
  return {
    getAll: function() {
      return $http.get(`http://localhost:3000/api/zookeepers`)
        .then((val) => { 
          return val.data
        }) 
      },
    getOne: function(id) {
        return $http.get(`http://localhost:3000/api/zookeepers/${id}`)
          .then((val) =>  val.data)
      },
    add: function(newZookeeper) {
      return $http.post(`http://localhost:3000/api/zookeepers`, newZookeeper)
        .then((val) =>  val.data)
    },
    delete: function(id) {
      return $http.delete(`http://localhost:3000/api/zookeepers/${id}`)
        .then((val) =>  val)
    },
    patch: function(updatedZookeeper) {
      return $http.patch(`http://localhost:3000/api/zookeepers`, updatedZookeeper)
        .then((val) =>  val)
    }
  }
})
