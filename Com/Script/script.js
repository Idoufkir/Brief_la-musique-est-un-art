    //show alert div on Play
  $("#play").click(function () {
    alert("Music in proggress");
  });
  
  //searching method for Artists
  $("#searchArtiste").keyup(function () {
    var search = $("#searchArtiste").val();
    $(".nameArtiste").each(function () {
      if ($(this).text() === search) {
        $(this).parent().css("display", "block");
      } else if (search == "") {
        $(this).parent().css("display", "block");
      } else {
        $(this).parent().css("display", "none");
      }
    });
  });
  
  //searching method for Music
  $("#searchMusique").keyup(function () {
    var search = $("#searchMusique").val();
    $(".nameMusique").each(function () {
      if ($(this).text() === search) {
        $(this).parent().css("display", "block");
      } else if (search == "") {
        $(this).parent().css("display", "block");
      } else {
        $(this).parent().css("display", "none");
      }
    });
  });