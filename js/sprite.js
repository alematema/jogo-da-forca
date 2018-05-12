var frameIndex = 1;

function createSprite(cssSelector) {

	var sprite = document.querySelector(cssSelector);
	sprite.nextFrame = nextFrame;

	return sprite;
}

function getCurrentFrame() {
	return 'frame' + frameIndex;
}

function nextFrame() {

	var frame = getCurrentFrame();
	if (this.classList.contains(frame)) this.classList.remove(frame);
	
	frameIndex++;
	//	reseta frame
	if (frameIndex > 9) frameIndex = 1;
	frame = 'frame' + frameIndex;
	
	this.classList.add(frame);

}
