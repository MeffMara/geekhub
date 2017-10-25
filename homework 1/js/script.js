// $(function(){
//     $('a').click(function(event){
        
//          event.preventDefault();
//     });
//     $('a').addClass('test');
 
//      $('a').click(function(event){
//          event.preventDefault(); 
//          $(this).css({
//             'border-bottom': '1px solid black',
//             opacity: '0.5',
//             height: '150px',
//             width: '150px',
//                 function(){
//                     $(this).css({
//                         'border-bottom': 'none',
//                         opacity: 0,
                        
//                     })
//                 }
//          });

//  })
// })
$(document).ready(function () {
    $('a').addClass('test');
    $('a').on('click', function () {
       var num = 4;
       alert(num); 
    }); 
    $('ul li').addClass(function(index){
        return 'item-' + index;
    });
});