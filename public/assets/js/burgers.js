$(function() {
    $(".change-devoure").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoure = $(this).data("newdevoure");
      console.log(newDevoure);
  
      var newDevoureState = {
        devoured: 1
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoureState
      }).then(
        function() {
          console.log("changed devoure to", newDevoure);
          location.reload();
        }
      );
    });
});