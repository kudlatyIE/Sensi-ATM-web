/* JavaScript code */

navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

var cam_video_id = "camsource"
	

window.addEventListener('DOMContentLoaded', function() {
    // Assign the <video> element to a variable
    var video = document.getElementById(cam_video_id);
    var options = {
        "audio": false,
        "video": {	"mandatory": {
    				"width": { "min": 640 },
    				"height": { "min": 480 }
  				},
  			"optional": [
    			{ "width": 1024 },
    			{ "width": { "min": 1024 }},
    			{ "width": { "max": 1024 }},
  			]
  		}
  		
    };
    var constraints = {
  			"audio": false,
  			"video": {
    			"width": { "min": 1024, "max": 1024 },
    			"height": { "min": 720, "max": 720 },
    			"miniFramerate": 30,
    			"require": ["width", "height"] // needed pre-Firefox 38 (non-spec)
  			},
		};
    
    
    // Replace the source of the video element with the stream from the camera
    if (navigator.getUserMedia) {
        navigator.getUserMedia(options, function(stream) {
            video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
        }, function(error) {
            console.log(error)
        });
        // Below is the latest syntax. Using the old syntax for the time being for backwards compatibility.
        // navigator.getUserMedia({video: true}, successCallback, errorCallback);
    } else {
        $("#qr-value").text('Sorry, native web camera streaming (getUserMedia) is not supported by this browser...')
        return;
    }
}, false);

$(document).ready(function() {
    if (!navigator.getUserMedia) return;
    cam = camera(cam_video_id);
    cam.start()
})