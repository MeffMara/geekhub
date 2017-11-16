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
   
    $('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
    });
    $('a.signIn').click(function (e){
    $('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
    e.preventDefault();
    });
 
});