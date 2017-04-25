app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return $http.get(`http://localhost:3000/api/allZookeepers`)
          .then((val) => {
            return val.data
          })
      },
    add: function(newZookeeper) {
      return $http.post(`http://localhost:3000/api/addZookeeper`, newZookeeper)
        .then((val) => {
          return val.data.zookeepers
        })
    },
    delete: function(id) {
      return $http.delete(`http://localhost:3000/api/zookeeper/${id}`)
        .then((val) => {
          return val
        })
    }
  }
})
