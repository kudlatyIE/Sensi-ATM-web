function read(a) {

	username = a.match(":(.*):")[1];
	
	//$("#qr-code-value").text(a);
    //$("#xGif").hide();
   	//$("#tickGif").show();

		window.setTimeout(win, 100);
	
}

// Arek
function win() { 
	setInterval(function() { 
		window.location = 'success.html' ; 
	}, 100); 
}

qrcode.callback = read;


/*

// Pat

function relocate(){

	setInterval(function () {
		    window.location = 'http://localhost:1234' + '?username='+ username;
     
    }, 1500);
}
    
qrcode.callback = read;

*/


