app.controller('ZooCtrl', function($scope, AnimalFact){

  $scope.view = 'animals'

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

  $scope.setView = (view) => {
    $scope.view = view
  }


})
