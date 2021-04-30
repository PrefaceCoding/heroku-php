document.addEventListener("DOMContentLoaded", () => {

	const canvas = document.getElementById("canvas");
	const canvasXText = document.getElementById("canvasx");
	const mouseXText = document.getElementById("mousex");

	function getMousePos(canvas, evt){
		var rect = canvas;
		canvasXText.innerHTML = `Canvas Top Left Coordinates: (${rect.left}, ${rect.top})`;

		mouseXText.innerHTML = `Mouse X, Y: (${evt.clientX}, ${evt.clientY})`;
	}

	document.addEventListener("mousemove", function(evt){
		getMousePos(canvas, evt);
	}, false);
});