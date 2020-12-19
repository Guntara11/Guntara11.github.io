// even pada saat link di klik

$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 70

	},700,'swing');

	e.preventDefault();

});


//efek paralax jumbotron

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px,'+wScroll/3+'%)'
	});
	$('.jumbotron h1').css({
		'transform': 'translate(0px,'+wScroll/2+'%)'
	});
	$('.jumbotron p').css({
		'transform': 'translate(0px,'+wScroll/1.25+'%)'
	});

	// efek portofolio
	if (wScroll > $('.portofolio').offset().top - 250) {
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail') .eq(i) .addClass('muncul');
			}, 350 * i); 
		});
		
	
	}


} );