(function() {
  angular
    .module("BlogApp", [])
    .controller("BlogController", BlogController);

  function BlogController($scope, $http) {
    $scope.createPost = createPost;
    $scope.editPost = editPost;
    $scope.updatePost = updatePost;
    $scope.deletePost = deletePost;

    function init() {
      getAllPosts();
    }
    init();

    function getAllPosts() {
      $http
        .get("/api/blogpost")
        .success(function(posts) {
          $scope.posts = posts;
        });
    }

    function createPost(post) {
      console.log(post);
      $http
        .post("/api/blogpost", post)
        .success(getAllPosts);
    }

    function editPost(postId) {
      $http
        .get("/api/blogpost/" + postId)
        .success(function(post) {
          $scope.post = post;
        })
    }

    function updatePost(post) {
      $http
        .put("/api/blogpost/" + post._id, post)
        .success(getAllPosts);
    }

    function deletePost(postId) {
      $http
        .delete("/api/blogpost/"+postId)
        .success(getAllPosts);
    }
  }
})();