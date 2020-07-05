// 0 = null
// 1 = x
// 2 = o
let gameData = [
  [0, 0, 0], //0
  [0, 0, 0], //1
  [0, 0, 0], //2
  //0 1  2
];

//let gameData2 = [0,0,0,0,0,0,0,0,0]
// let gameData3 = {
//     x0y0: 0,
//     x0y1: 0,
//     x0y2: 0,
//     x1y0: 0,
//     x1y1: 0,
//     x1y2: 0,
//     x2y0: 0,
//     x2y1: 0,
//     x2y2: 0,
// }

// let gameData4 = {
//         x0: [0,0,0],
//         x1: [0,0,0],
//         x2: [0,0,0],
//     }

//

function didSomeoneWin() {
  return "";
}

let player = 1;
function playGame(y, x) {
  switch (player) {
    case 1:
      gameData[y][x] = player;
      player = 2;
      break;
    case 2:
      gameData[y][x] = player;
      player = 1;
      break;
    default:
      console.log("error");
      break;
  }

  console.log(
    "",
    gameData[0],
    "\n",
    gameData[1],
    "\n",
    gameData[2],
    "\n",
    didSomeoneWin(),
    "\n -----------------------------"
  );
}

/*
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
*/
playGame(0, 0);
playGame(1, 2);
playGame(1, 0);
playGame(2, 0);
playGame(1, 1);
playGame(2, 2);
playGame(0, 2);
playGame(0, 0);

/*
1- امنع الغش - الكتابة مكان لاعب اخر 
2- حدد الفائز مباشرة عند اكمالة لثلاث نقاط
3- حدد نقطة التعادل عند ما لايصبح هناك فائز قبل انتهاء كل الحركات
4- ورنا ابداعاتك 
*/

/*
 [ 1, 0, 1 ] 
 [ 1, 1, 2 ] 
 [ 2, 0, 1 ]
*/
