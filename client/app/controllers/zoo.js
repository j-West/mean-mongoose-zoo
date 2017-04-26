app.controller('ZooCtrl', function($scope, AnimalFact, ZoneFact, ZookeeperFact){

  $scope.view = 'animals'

  const getAnimals = () =>{
    AnimalFact.getAll()
      .then((data) => {
        $scope.animals = data
      })
  }

  ZoneFact.getAll()
  .then(zones => {
    $scope.zones = zones
  })

  ZookeeperFact.getAll()
  .then(zookeepers => {
    console.log(zookeepers)
    $scope.zookeepers = zookeepers
  })

  getAnimals()

  // $scope.remove = (id) => {
  //   AnimalFact.remove(id)
  //   .then(() => {
  //     popPage()
  //   })
  // }

  // $scope.save = (id, updateInfo) => {
  //   AnimalFact.update(id, updateInfo)
  //   .then(() => {
  //     console.log("updated!!")
  //     $scope.editing = false;
  //     popPage()
  //   })
  // }

  $scope.setView = (view) => {
    $scope.view = view
  }


})
