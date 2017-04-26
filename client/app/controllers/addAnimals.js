app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact, ZoneFact, TrainerFact){

  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals
      // console.log($scope.animals)
    })

    ZookeeperFact.getAll()
    .then((zookeepers) => {
      console.log(zookeepers)
      $scope.zookeepers = zookeepers;
    })

    ZoneFact.getAll()
    .then(zones => {
      // console.log(zones)
      $scope.zones = zones
    })

    TrainerFact.getAll()
    .then(trainers => {
      // console.log(trainers)
      $scope.trainers = trainers
    })


  $scope.addAnimal = () => {
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
  }

  $scope.addZookeeper = () => {
    ZookeeperFact.add($scope.newZookeeper)
    .then(() => {
      $scope.zookeepers.push($scope.newZookeeper)
      $scope.newZookeeper = {}
    })
  }

  $scope.deleteZookeeper = (id) => {
    ZookeeperFact.delete(id)
    .then(() => {

    })
  }
})
