var createSprite = function (cssSelector) {

	var $el = $(cssSelector);

	var frames = [
		'frame1', 'frame2', 'frame3',
		'frame4', 'frame5', 'frame6',
		'frame7', 'frame8', 'frame9',
	];

	var current = 0;
	var last = frames.length - 1;

	$el.addClass(frames[current]);
	
	// funcionalidade do isFinished
	var isFinished = function (){
		return current == last;
	}	
	
	// funcionalidade do reset
	var reset = function () {
		moveFrame(frames[current], frames[0]);
		current = 0;
	}

	//funcionalidades do nextFrame
	var hasNext = function () {
		return current + 1 <= last;
	};

	var moveFrame = function (from, to) {
		$el.removeClass(from).addClass(to);
	};

	var nextFrame = function () {
		if (hasNext()) moveFrame(frames[current], frames[++current]);
	};


	return {
		nextFrame: nextFrame,
		reset: reset,
		isFinished : isFinished
	};

};
