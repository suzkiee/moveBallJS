// var velocityX = 5;
//       var velocityY = 3;
//       var positionX = 0;
//       var positionY = 0;
//       var ball = document.getElementById('ball');
//       var Xmax = 300;
//       var Xmin = 0;
//       var Ymax = 300;
//       var Ymin = 0;
//       // var color = getRandomColor();


//       // function getRandomColor(){
//       //   var letter = "0123456789ABCDEF";
//       //   var color = "#";
//       //   for (var i = 0; i < 6; i++){
//       //     letter[Math.floor(Math.random()*16)];
//       //   }
//       //     return color;
//       // }


//       function moveBall(){
//         positionX = positionX + velocityX;
//         ball.style.left = positionX + 'px';
//         ball.style.top = positionX + 'px';
//         // ball.style.background = getRandomColor();

//         if(positionX > Xmax || positionX < Xmin){
//           velocityX = velocityX*-1;
//           // color = getRandomColor();
//         };

//         if(positionY > Ymax || positionY < Ymin){
//           velocityY = velocityY*-1;
//           // color = getRandomColor();
//         }
//       }