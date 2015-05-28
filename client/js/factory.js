todoApp.factory('todosFactory', function($http) {
  var urlBase = window.API_HOST+'/api/todos';
  console.log("Debug API_HOST is " + window.API_HOST);
  var _todoService = {};

  _todoService.getTodos = function() {
    return $http.get(urlBase, {withCredentials: true});
  };

  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo, {withCredentials: true});
  };

  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo, {withCredentials: true});
  };

  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id, {withCredentials: true});
  };

  return _todoService;
});
