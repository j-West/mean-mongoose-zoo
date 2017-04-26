app.controller('ZooCtrl', function($scope, AnimalFact, TrainerFact){

  $scope.view = 'animals';
  $scope.editing = false;

  const getAnimals = () =>{
    AnimalFact.getAll()
      .then((data) => {
        $scope.animals = data
      })
  }

  getAnimals()

  $scope.remove = (id) => {
    AnimalFact.remove(id)
    .then(() => {
      getAnimals()
    })
  }

  $scope.save = (updateInfo) => {
    AnimalFact.update(updateInfo)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      getAnimals()
    })
  }

  $scope.setView = (view) => {
    $scope.view = view
  }




  const getTrainers = () => {
    TrainerFact.getAll()
    .then(trainers => {
      $scope.trainers = trainers
      console.log($scope.trainers);
    })
  }

  getTrainers()

})
