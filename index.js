//JQueryを使った、ドロップダウン
$('.nav-body').hover(function() {
      $("ul:not(:animated)", this).slideDown("fast");
  },function(){
      $("ul",this).slideUp("fast");
  }
);

jQuery( function( $ ) {
	$( ".js-humburger" ).on( "click", function() {
		$( this ).toggleClass( "is-open" );
		$( ".header-nav" ).toggleClass( "is-open" );
		$( "body" ).toggleClass( "is-open" );
	} );
} );