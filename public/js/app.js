(function() {
  angular
    .module("BlogApp", [])
    .controller("BlogController", BlogController);

  function BlogController($scope, $http) {
    $scope.createPost = createPost;

    function getAllPosts() {
      $http
        .get("/api/blogpost")
        .success(function(posts) {
          $scope.posts = posts;
        })
    }

    function createPost(post) {
      console.log(post);
      $http.post("/api/blogpost", post);
    }
  }
})();