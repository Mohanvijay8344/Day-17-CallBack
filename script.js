var ans=document.querySelector(".show")
var div1=document.querySelector(".show1")
function get(){

setTimeout(()=>{

ans.append("10 ")

      setTimeout(() => {
         
          ans.append("9 ")
             setTimeout(() => {
              
                ans.append("8 ")
                  setTimeout(() => {
                 
                    ans.append("7 ")
                       setTimeout(() => {
                      
                        ans.append("6 ")
                           setTimeout(() => {
                          
                            ans.append("5 ")
                               setTimeout(() => {
                              
                                ans.append("4 ")
                                   setTimeout(() => {
                                  
                                    ans.append("3 ")
                                       setTimeout(() => {
                                        
                                        ans.append("2 ")
                                           setTimeout(() => {
                                          
                                            ans.append("1 ")
                                              setTimeout(() => {
                                                console.log()
                                                div1.append("HAPPY INDEPENDENCE DAY")
                                              },1000);
                                           },1000);
                                       },1000);
                                   },1000);
                               },1000);
                           }, 1000);
                       },1000);
                  }, 1000);
             }, 1000);
      },1000);
},1000)
}
get()