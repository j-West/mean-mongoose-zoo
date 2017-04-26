app.controller('ZooCtrl', function($scope, AnimalFact, TrainerFact){

  $scope.view = 'animals';
  $scope.editing = false;

  const getAnimals = () =>{
    AnimalFact.getAll()
      .then((data) => {
        console.log(data);
        $scope.animals = data
      })
  }
  getAnimals()

  //REMOVE ANIMAL
  $scope.remove = (id, index) => {

    AnimalFact.remove(id)
    .then(() => {
      // getAnimals()
      $scope.animals.splice(index, 1)
    })
  }

  // UPDATE
  $scope.save = (id, name, species, age) => {
    const animal = {
      id: id,
      name: name,
      species: species,
      age: age
    }

    AnimalFact.update(animal)
    .then(() => {
      console.log("updated!!")
      $scope.editing = false;
      getAnimals()
    })
  }

  // NAV FUNCTION
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
