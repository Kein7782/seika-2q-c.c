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
	// anime({
	// 	targets: '.staggering-grid-demo .el',
	// 	scale: [
	// 	{value: .1, easing: 'easeOutSine', duration: 500},
	// 	{value: 1, easing: 'easeInOutQuad', duration: 1200}
	// 	],
	// 	delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
	// 	endDelay: 1000,
	// 	translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
  	// 	translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
  	// 	rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
  	// 	easing: 'easeInOutQuad',
	// 	translateX:() => anime.random(-200, 200),
	// 	translateY:() => anime.random(-200, 200),
	// 	translateX: function (el, i) {
	// 		return initialPositions[i].x;
	// 	    },
	// 	translateY: function (el, i) {
	// 		return initialPositions[i].y;
	// 	    },
	// })


	anime({
		targets: '.staggering-grid-demo .el',
		scale: [
		{value: .1, easing: 'easeOutSine', duration: 500},
		{value: 1, easing: 'easeInOutQuad', duration: 100},
		],
		delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
		endDelay: 1000,
		// translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
  		// translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
  		// rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
  		easing: 'easeInOutQuad',
		// translateX:() => anime.random(-200, 200),
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
		// 既存のanime.jsのアニメーションコード

		// 各要素にクリックイベントリスナーを追加す 
	const elements = document.querySelectorAll('.staggering-grid-demo .el');
	let activeElement = null;
	elements.forEach((element) => {
		element.addEventListener('click', () => {
		    removeItem(element.id);
		});

		
//     elements.forEach((element) => {
      //   element.addEventListener('click', () => {
      //       element.style.display = 'none'; // クリックされた要素を非表示にする
      //   });

      //   element.addEventListener('mousemove', (e) => {
      //       const rect = element.getBoundingClientRect();
      //           const centerX = rect.left + rect.width / 2;
      //           const centerY = rect.top + rect.height / 2;
      //           const mouseX = e.clientX;
      //           const mouseY = e.clientY;

      //           const translateX = mouseX - centerX;
      //           const translateY = mouseY - centerY;
      //       element.style.transform = `translate(${mouseX}px, ${mouseY}px)`; // マウスの座標に要素を移動
      //   });
	  

        element.addEventListener('mouseleave', () => {
		activeElement = null;
            element.style.transform = 'translate(0, 0)'; // マウスが要素から外れたら元の位置に戻す
        });
    });


	// }).add({
	// 	targets: '.staggering-grid-demo .el',
	// 	// translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
  	// 	// translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
  	// 	rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
  	// 	easing: 'easeInOutQuad',
	// 	translateX:() => anime.random(-200, 200),
	// 	translateY:() => anime.random(-200, 200),
	// 	// translateX: function (el, i) {
	// 	// 	return initialPositions[i].x;
	// 	//     },
	// 	// translateY: function (el, i) {
	// 	// 	return initialPositions[i].y;
	// 	//     },
	// }).play()


	// anime({
	// 	targets: '.staggering-grid-demo .el',
	// 	translateX: 0,
	// 	translateY: 0,
	// 	duration: 1000,
	// 	easing: 'easeInOutQuad',
	// 	delay: 1000
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




// const animateElements = () => {
//       const elements = document.querySelectorAll('.staggering-grid-demo .el');
//       const initialPositions = [];

//       elements.forEach((element) => {
//         initialPositions.push({ x: element.offsetLeft, y: element.offsetTop });
//       });

//       anime({
//         targets: '.staggering-grid-demo .el',
//         scale: [
//           { value: .1, easing: 'easeOutSine', duration: 500 },
//           { value: 1, easing: 'easeInOutQuad', duration: 1200 }
//         ],
//         // Other animations...
//       });

//       elements.forEach((element, index) => {
//         element.addEventListener('click', () => {
//           // Reset animation for the clicked element
//           anime({
//             targets: element,
//             translateX: initialPositions[index].x - 125, // Subtract the initial left margin
//             translateY: initialPositions[index].y - 250, // Subtract the initial top margin
//             scale: 1,
//             rotateZ: 0,
//             easing: 'easeInOutQuad',
//           });
//         });
//       });

//       // Function to update element position to follow the mouse cursor
//       const followCursor = (event) => {
//         elements.forEach((element, index) => {
//           const mouseX = event.clientX;
//           const mouseY = event.clientY;
//           anime({
//             targets: element,
//             translateX: mouseX - 125 - initialPositions[index].x, // Subtract the initial left margin
//             translateY: mouseY - 250 - initialPositions[index].y, // Subtract the initial top margin
//             duration: 300,
//             easing: 'linear',
//           });
//         });
//       };

//       // Function to follow cursor on Enter key press
//       const followCursorOnEnter = (event) => {
//         if (event.key === 'Enter') {
//           document.addEventListener('mousemove', followCursor);
//         }
//       };

//       // Add event listener to track Enter key press
//       document.addEventListener('keydown', followCursorOnEnter);
//     };

//     // Trigger the animation when the page loads
//     animateElements();




// const elements = document.querySelectorAll('.staggering-grid-demo .el');

//   elements.forEach((element) => {
//     element.addEventListener('click', () => {
// 	document.addEventListener('mousemove', followCursor);
//     });
//   });

//   function followCursor(event) {
//     elements.forEach((element) => {
//       anime({
//         targets: element,
//         translateX: event.clientX - element.getBoundingClientRect().left - element.clientWidth / 2,
//         translateY: event.clientY - element.getBoundingClientRect().top - element.clientHeight / 2,
//         easing: 'easeInOutQuad',
//       });
//     });
//   }



// オリジナルのアニメーション関数
// const animateElements = () => {
//           const elements = document.querySelectorAll('.staggering-grid-demo .el');
//           elements.forEach((element) => {
//             element.addEventListener('click', () => {
//               // クリックした要素を非表示にする
//               element.style.display = 'none';
//             });
//           });
// 	};