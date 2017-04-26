app.controller('ZooCtrl', function($scope, AnimalFact, TrainerFact){

  const getAnimals = () =>{
    AnimalFact.getAll()
      .then((data) => {
        $scope.animals = data
        console.log($scope.animals);
      })
  }

  getAnimals()

const getTrainers = () => {
  TrainerFact.getAll()
  .then(trainers => {
    $scope.trainers = trainers
    console.log($scope.trainers);
  })
}

getTrainers()

  $scope.remove = (id) => {
    AnimalFact.remove(id)
    .then(() => {
      popPage()
    })
  }

  $scope.save = (id, updateInfo) => {
    AnimalFact.update(id, updateInfo)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      popPage()
    })
  }


})
