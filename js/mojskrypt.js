// (function($) {

   $(document).ready(function () {

      var btn = $("a.button"),
         ul = $("<ul></ul>"),
         div = $(".center");

         btn.on("click", function(e) {
            e.preventDefault();

            $.get("https://jsonplaceholder.typicode.com/users", function(data) {

                  for (i=0; i < data.length; i++) {
                     var li = $("<li></li>");
                     li.text( data[i].name  + ", " + data[i].username + ", " + data[i].email + ", " + data[i].phone );
                     ul.append(li);
                  }

            });

         });




         div.append(ul);

   });


// })(jQuery);
