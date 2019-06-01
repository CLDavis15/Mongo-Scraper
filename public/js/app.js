$(document).ready(function() {

  $("#scrape").on("click", function() {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function(data) {
        console.log(data)
        window.location = "/"
    })
});

//Set clicked nav option to active
$(".navbar-nav li").click(function() {
   $(".navbar-nav li").removeClass("active");
   $(this).addClass("active");
});

//Handle Save Article button
$(".saved").on("click", function() {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/saved" + thisId
    }).done(function(data) {
        window.location = "/"
    })
});

//Handle Delete Article button
$(".delete").on("click", function() {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + thisId
    }).done(function(data) {
        window.location = "/saved"
    })
});

//Handle Save Note button
$(".saveNote-btn").on("click", function() {
    var thisId = $(this).attr("data-id");
    if (!$("#" + thisId).val()) {
      console.log("Saved Note!")
    }else {
      $.ajax({
            method: "POST",
            url: "/notes/saved/" + thisId,
            data: {
              text: $("#noteText" + thisId).val()
            }
          }).done(function(data) {
              // Log the response
              console.log(data);
              // Empty the notes section
              $("#noteText").empty();
              window.location = "/saved"
          });
    }
});

//Handle Delete Note button
$(".deleteNote-btn").on("click", function() {
  
    var articleId = $(this).attr("data-article-id");
    $.ajax({
        method: "DELETE",
        url: "/notes/delete/" + articleId
    }).done(function(data) {
        console.log(data)
        window.location = "/saved"
    })
});


})