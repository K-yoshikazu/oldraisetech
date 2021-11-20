//JQueryを使った、ドロップダウン
  $(".nav-body").hover(function() {
      $("ul:not(:animated)", this).slideDown("fast");
  },function(){
      $("ul",this).slideUp("fast");
  }
);

jQuery( function( $ ) {
  $( ".js-humburger" ).on( "click", function() {
    $( this ).toggleClass( "is-open" );
  $( ".header-nav" ).toggleClass( "is-open" );
  $( ".nav" ).toggleClass( "is-open" );
  } );
} );

jQuery( function( $ ) {
  $( ".nav-cross" ).hover( function() {
    $( this ).toggleClass( "open" );
    $( ".nav-link" ).toggleClass( "open" );
  } );
} );
jQuery( function( $ ) {
  $( ".nav-link li a" ).hover( function() {
    $(this ).parents(".nav-body").find("a").toggleClass( "open" );
    } );
} );


//戦いの記録
// // let two;
// // let the;
// // if(two == ".nav-cross"){
// //   $(two).addClass("open");
// //   console.log("ううううう")
//   // return true;
// // }

// // $(function one (){
// //   console.log("0");
// //   $(function(){
// //   $(".nav-link li a").on({
// //     "mouseover": function() {
// //       console.log("1");
// //       return true;
// //   },
// //   "mouseleave": function() {
// //     console.log("2");
// //     return false;
// //   }
// // });
// // })});

// // $(function one(){
// //  one = $(this).children('.nav-link a');
// //  return true;
  
// // });
// // console.log(one);
// let one=false;
// let two=false;
// let the=0;
// let fwo=0;

// $(".nav-cross").hover(function() {
//   // if(one ==true && two == true){
//   //   $(".nav-cross").removeClass("open");
//   //   console.log("うううう");
//   //   one = false;
//   //   two = false;
//   //   return;
//   // }
//   $(this).removeClass("open");
//   $(this).addClass("open");
//   console.log("ああああ");
//   one = true;
//   the++;
  
//  }
//  ,function(){


//   if(one == true && two == true || one == false && two == false){
//     $(".nav-cross").removeClass("open");
//     console.log("うううう");
//     one = false;
//     two = false;
//     the=0;
//     return;
//   }
//   else if(one ==true){
//   $(this).addClass("open");
//   console.log("いいいい");
//   two = true;
//   fwo++;
//     if(the==1 && fwo>=1){
//       $(".nav-cross").removeClass("open");
//       console.log("ええええ");
//       one = false;
//       two = false;
//       the = 0;
//       fwo = 0;
//       return;
//     }
    
//   }
// }
// );




// $(".nav-link li a").hover(function(){
//   if(this || fwo ==true)
//   $("this").addClass("open");
//   console.log("3");
//   console.log(this);
// })


  // $(this).addClass("open");
  // $(this).removeClass("open");


// $(".nav-cross").mouseout(function(){
//   let hovering = false;
//   $(":hover").each(function(){
//   if($(this).prop("nav-cross") == "UL"){
//     hovering = true;
//     if(!hovering){
//       $(".nav-cross").addClass("open");
//     }
//   //   else
//   //   $(".nav-cross").removeClass("open");
//   // }
// });
// if(!hovering){
//   $(".nav-cross").addClass("open");
//   console.log("あああああ")
// }
// else
//   $(".nav-cross").removeClass("open");
//   console.log("いいいいい")
// });
