if ("https:" == location.protocol)
	var protocolPath  = 'https://';
else
	var protocolPath  = 'http://';

if (window.location.hostname == '172.21.4.100') {
	var  path = protocolPath + '172.21.4.100/AAAlogo/';
	var actionPath	= protocolPath + '172.21.4.100/AAAlogo/';
}
else {
	var  path = protocolPath + 'www.website-coder.net/logo-creator/';
	var actionPath	= protocolPath + 'www.website-coder.net/logo-creator/';
}

function color_picker()
{
	$('#color_pallete').ColorPicker({
		flat: true,
		color: '#00ff00',
		onChange: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#color').val('#' + hex);
		},
		onSubmit: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#colorSelector2').click();
		}
	});
	$('#color_pallete>div').css('position', 'absolute');
	var widt = false;
	$('#colorSelector2').click(function(e) {
		$('#color_pallete').stop().animate({height: widt ? 0 : 173}, 500);
		widt = !widt;
		e.stopPropagation();
	});
	$('.colorpicker').click(function(e) {
		e.stopPropagation();
	});
	$("body").click(function() {
	  $('#color_pallete').stop().animate({height: 0}, 500);
	  widt = false;
	});
}

function color_picker_new()
{
	$('#color_pallete').ColorPicker({
		flat: true,
		color: '#00ff00',
		onChange: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#color').val('#' + hex);
			$("#hid_check_color").val(1);
			changeColor();
		},
		onSubmit: function(hsb, hex, rgb) {
			$('#colorSelector2 div').css('backgroundColor', '#' + hex);
			$('#colorSelector2').click();
		}
	});
	$('#color_pallete>div').css('position', 'absolute');
	var widt = false;
	$('#colorSelector2').click(function(e) {
		$('#color_pallete').stop().animate({height: widt ? 0 : 173}, 500);
		widt = !widt;
		e.stopPropagation();
	});
	$('.colorpicker').click(function(e) {
		e.stopPropagation();
	});
	$("body").click(function() {
	  $('#color_pallete').stop().animate({height: 0}, 500);
	  widt = false;
	});
}