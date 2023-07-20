import anime from 'animejs/lib/anime.es.js';

// anime({
// 	targets: '#elem',
// 	keyframes: [
// 	  {translateX: 250},
// 	  {translateY: 400},
// 	],
// 	duration: 4000,
//     });
// const stageAnimation = anime.timeline({
	anime({
		targets: '.staggering-grid-demo .el',
		scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 1200}
		],
		delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
		endDelay: 1000,
		translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
  		translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
  		rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
  		easing: 'easeInOutQuad',
		translateX:() => anime.random(-200, 200),
		translateY:() => anime.random(-200, 200),
		translateX: function (el, i) {
			return initialPositions[i].x;
		    },
		translateY: function (el, i) {
			return initialPositions[i].y;
		    },
	})


	// anime({
	// 	targets: '.staggering-grid-demo .el',
	// 	translateX: function (el, i) {
	// 	  return initialPositions[i].x;
	// 	},
	// 	translateY: function (el, i) {
	// 	  return initialPositions[i].y;
	// 	},
	// 	duration: 1000,
	// 	easing: 'easeInOutQuad',
	//     });
// 	.add({
// 		translateX:() => anime.random(-200, -200),
// 		translateY:() => anime.random(-200, -200),
// 		delay: anime.stagger(200, { grid: grid,from:
// 		"last" }),
// 		scale: 0.5,
// 		backgroundcolor: "#15ffa5",
// 		borderRadius: "50%",
// 	});
// stageAnimation.play();
