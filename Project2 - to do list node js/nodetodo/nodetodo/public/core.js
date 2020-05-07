var nodeTodo = angular.module("nodeTodo", []);

function mainController($scope, $http) {
  $scope.formData = {};

  $scope.cos = "College";

  // when landing on the page, get all todos and show them
  $http
    .get("/api/todos")
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  $http
    .get("/api/todos/done")
    .success(function(data) {
      $scope.todosdone = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  $http
  .get("/api/todos/notdone")
  .success(function(data) {
    $scope.notdone = data;
  })
  .error(function(data) {
    console.log("Error: " + data);
  });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http
      .post("/api/todos", $scope.formData)
      .success(function(data) {
        $("input").val("");
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  // update a todo after checking it
  $scope.updateTodo = function(id) {
    var new_todos = $scope.posts[index].etat;
    Posts.update({ _id: post._id }, { "etat": etat });
  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
  }
}
