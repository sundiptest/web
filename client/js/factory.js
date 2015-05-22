todoApp.factory('todosFactory', function($http, $httpProvider) {
  var urlBase = 'http://api-staging-runnabledemo.runnableapp.com:3001/api/todos';
  $httpProvider.defaults.withCredentials = true;
  var _todoService = {};

  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };

  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todoService;
});
