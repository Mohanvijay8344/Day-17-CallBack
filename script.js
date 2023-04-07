// Start countdown from 10 to 1
setTimeout(function() {
   document.body.innerText = '10';
   setTimeout(function() {
      document.body.innerText = '9';
      setTimeout(function() {
         document.body.innerText = '8';
         setTimeout(function() {
            document.body.innerText = '7';
            setTimeout(function() {
               document.body.innerText = '6';
               setTimeout(function() {
                  document.body.innerText = '5';
                  setTimeout(function() {
                     document.body.innerText = '4';
                     setTimeout(function() {
                        document.body.innerText = '3';
                        setTimeout(function() {
                           document.body.innerText = '2';
                           setTimeout(function() {
                              document.body.innerText = '1';
                              // Display "Happy Independence Day"
                              setTimeout(function() {
                                 document.body.innerText = 'Happy Independence Day!';
                              }, 1000);
                           }, 1000);
                        }, 1000);
                     }, 1000);
                  }, 1000);
               }, 1000);
            }, 1000);
         }, 1000);
      }, 1000);
   }, 1000);
}, 1000);