$(function(){
	
	var write1 = $('#password1'),
		write2 = $('#password2'),
		form = $('#main form'),
		arrow = $('#main .arrow');

	// Empty the fields on load
	$('#main .row input').val('');

	// Handle form submissions
	form.on('submit',function(e){
		
		// Is everything entered correctly?
		if($('#main .row.success').length == $('#main .row').length){
			
			// Yes!
			alert("Thank you for trying out this demo!");
			e.preventDefault(); // Remove this to allow actual submission
			
		}
		else{
			
			// No. Prevent form submission
			e.preventDefault();
			
		}
	});
	
	

	// Use the complexify plugin on the first password field
	write1.complexify({minimumChars:4, strengthScaleFactor:0.09}, function(valid, complexity){
		
		
		
		var calculated = (complexity/100)*268 - 134;
		var prop = 'rotate('+(calculated)+'deg)';
		
		// Rotate the arrow
		arrow.css({
			'-moz-transform':prop,
			'-webkit-transform':prop,
			'-o-transform':prop,
			'-ms-transform':prop,
			'transform':prop
		});
	});
	
	
	
	
	
	
	// Use the complexify plugin on the first password field
	write2.complexify({minimumChars:3, strengthScaleFactor:0.08}, function(valid, complexity){
		

		
		var calculated = (complexity/100)*268 - 134;
		var prop = 'rotate('+(calculated)+'deg)';
		
		// Rotate the arrow
		arrow.css({
			'-moz-transform':prop,
			'-webkit-transform':prop,
			'-o-transform':prop,
			'-ms-transform':prop,
			'transform':prop
		});
	});
	
	
	
	
});









function valid() {
cor = "0"
incor = "0"
test0 = document.myform.elements[0].value;
test1 = document.myform.elements[1].value;
if (test0.toLowerCase() == "live") {
++cor; }
else ++incor
if (test1.toLowerCase() == "cry") {
++cor; }
else ++incor
alert("you got " + cor + " right\n And you got " + incor + " wrong. You got " + cor/2 * 100 + "% correct!");
}


$("#audio").jPlayer({
    swfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
    supplied: "mp3"
});

$("a").click(function(e) {
    $("#audio").jPlayer("setMedia", { 
        mp3: this.href 
    }).jPlayer("play");

    e.preventDefault();
});
