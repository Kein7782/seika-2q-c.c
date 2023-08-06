import anime from 'animejs/lib/anime.es.js';


	anime({
		targets: '.staggering-grid-demo .el',
		scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 100},
		],
		delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
		endDelay: 1000,
  		easing: 'easeInOutQuad',
		rotateZ: [
			anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
			],

		translateX:[
			{value: () => anime.random(-180, 180), easing: 'easeOutSine', duration: 500},
			{value: 0, easing: 'easeInOutQuad', duration: 1200},
			],
		translateY:[
			() => anime.random(-180, 180),
			
		]
	})
		
	const elements = document.querySelectorAll('.staggering-grid-demo .el');
	let activeElement = null;
	elements.forEach((element) => {
		element.addEventListener('click', () => {
		    removeItem(element.id);
		});

        element.addEventListener('mouseleave', () => {
		activeElement = null;
            element.style.transform = 'translate(0, 0)'; // マウスが要素から外れたら元の位置に戻す
        });
    });


	