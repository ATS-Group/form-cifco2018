/** Hacks para que el input file funcione */

var inputs = document.querySelectorAll( '.file-c' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';

			fileName = e.target.value.split( '\\' ).pop();

		if( fileName ){
			label.querySelector( 'span' ).innerHTML = fileName;
		}else{
			label.innerHTML = labelVal;
		}
	});
});

/**Que los estilos del select funcionen */

$('.sel').each(function() {
	$(this).children('select').css('display', 'none');

	var $current = $(this);

	$(this).find('option').each(function(i) {
		if(i == 0){
			$current.prepend($('<div>', {
				class: $current.attr('class').replace(/sel/g, 'sel__box')
			}));

			var placeholder = $(this).text();
			$current.prepend($('<span>', {
				class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
				text: placeholder,
				'data-placeholder': placeholder
			}));

			return;
		}

		$current.children('div').append($('<span>', {
			class: $current.attr('class').replace(/sel/g, 'sel__box__option'),
			text: $(this).text()
		}));
	});
});

$('.sel').click(function(){
	$(this).toggleClass('active');
});

$('.sel__box__option').click(function(){
	var txt = $(this).text();
	var index = $(this).index();

	$(this).siblings('.sel__box__option').removeClass('selected');
	$(this).addClass('selected');

	var $currentSel = $(this).closest('.sel');
	$currentSel.children('.sel__placeholder').text(txt);
	$currentSel.children('select').prop('selectedIndex', index + 1);

});


$('.form').bind('submit', function(){
	var selectPais = document.querySelector( '.select.pais' );

	var opcionSeleccionada = this.options[selectPais.selectedIndex];

	console.log(opcionSeleccionada);

	return false;
});

