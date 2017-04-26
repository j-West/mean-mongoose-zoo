app.controller('ZooCtrl', function($scope, AnimalFact){

  const getAnimals = () =>{
    AnimalFact.getAll()
      .then((data) => {
        $scope.animals = data
        console.log($scope.animals);
      })
  }

  getAnimals()

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
