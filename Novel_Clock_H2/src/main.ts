// Assignment 3 - Xinyu Liu Carrot

import * as PIXI from "pixi.js"

interface flowerVar {
	// velocity: any;
	// petal: PIXI.Graphics;
	center: PIXI.Graphics;
	backgroundBox: PIXI.Graphics;
}
let colorSet: Array<number> = [];
let petalL: number; 
let petalW: number;
let centerS: number;
let boxHeight: number = window.innerHeight - 50;
let boxWidth: number = (window.innerWidth - 100) / 3;
let colorWinter: Array<number> = [0x931A25, 0xFADBD8, 0xF5EFEF];
let colorSpring: Array<number> = [0xEFD9D1, 0xD8AC9C, 0x999B84];
let colorSummer: Array<number> = [0xffca00, 0x240d00, 0x648e00];
let colorAutumn: Array<number> = [0xffd300, 0xffa100, 0xa74c00];
  
const main = async () => {
  let app = new PIXI.Application();

  // Application Display
  document.body.style.margin = '0';
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';
  app.renderer.resize(window.innerWidth, window.innerHeight);
  app.renderer.backgroundColor = 0x424949;

  let backgroundBox = new PIXI.Graphics();
  app.stage.addChild(backgroundBox);

  // let petal = new PIXI.Graphics();
  // app.stage.addChild(petal);

  let center = new PIXI.Graphics();
  app.stage.addChild(center);

  // Handle window resizing
  window.addEventListener('resize', (_e) => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
  });

  document.body.appendChild(app.view);
  
  let context: flowerVar = {
    // petal,
    center,
    backgroundBox
  };
  app.ticker.add(update, context);

}
  

  function update(this: any, delta: number) {

    if (new Date().getMonth() == 11 || new Date().getMonth() == 0 || new Date().getMonth() == 1){
      colorSet = colorWinter;
      petalL = 23;
      petalW = 20;
      centerS = 5;
    } else if (new Date().getMonth() == 2 || new Date().getMonth() == 3 || new Date().getMonth() == 4){
      colorSet = colorSpring;
      petalL = 25;
      petalW = 20;
      centerS = 5;
    } else if (new Date().getMonth() == 5 || new Date().getMonth() == 6 || new Date().getMonth() == 7){
      colorSet = colorSummer;
      petalL = 30;
      petalW = 15;
      centerS = 30;
    } else if (new Date().getMonth() == 8 || new Date().getMonth() == 9 || new Date().getMonth() == 10){
      colorSet = colorAutumn;
      petalL = 30;
      petalW = 8;
      centerS = 3;
    } 
  
    //Time to petal
    // let sRemainP: number  = (60 - new Date().getSeconds()) % 6;
    // let sRemainF = (60 - new Date().getSeconds() - sRemainP) / 6;
    // let mRemainP: number  = (60 - new Date().getMinutes()) % 6;
    // let mRemainF: number = (60 - new Date().getMinutes() - mRemainP) / 6;
    // let hRemainP: number  = (24 - new Date().getHours()) % 6;
    // let hRemainF: number = (24 - new Date().getHours() - hRemainP) / 6;
    // console.log(mRemainF);

    //Time to circles
    let sRemain: number = (60 - new Date().getSeconds()) % 6
    let sRow: number = (60 - new Date().getSeconds() - sRemain) / 6;
    let mRemain:number = (60 - new Date().getMinutes()) % 6;
    let mRow: number = (60 - new Date().getMinutes() - mRemain) / 6;
    let hRemain: number = (24 - new Date().getHours()) % 4;
    let hRow: number = (24 - new Date().getHours() - hRemain) / 4;
console.log(hRow);
    //Draw background boxes
    this.backgroundBox.clear();
    this.backgroundBox.beginFill(colorSet[2]);
    
    for(let i = 0; i < 3; i++){
      this.backgroundBox.pivot.x = (window.innerWidth - 100) / 6;
      this.backgroundBox.pivot.y = window.innerHeight / 2 - 25;
      this.backgroundBox.drawRoundedRect(
        25 + boxWidth / 2 + i * (boxWidth + 25) , 
        window.innerHeight / 2, 
        boxWidth, 
        boxHeight, 
        30
        );
    }
    this.backgroundBox.endFill();

     //Draw Hour Circles
     this.center.clear();
     this.center.beginFill(colorSet[0]);
     for (let i = 0; i < hRow; i++){
       for(let j = 0; j < 4; j++){
         this.center.drawCircle(25 + boxWidth / 5 + j * boxWidth / 5, 
          window.innerHeight / 7 + 25 + i * boxHeight / 7, 
          centerS);
         console.log("h");
       }
     }
     for (let x = 0; x < hRemain; x ++){
        this.center.drawCircle(25 + boxWidth / 5 + x * boxWidth / 5, 
        window.innerHeight / 7 + 25 + hRow * boxHeight / 7, 
        centerS);
     }

    for (let m = 0; m < mRow; m++){
      for (let n = 0; n < 6; n++){
        this.center.drawCircle(
          50 + 8 * boxWidth / 7 + n * boxWidth / 7,
          boxHeight / 11 + 25 + m * boxHeight / 11,
          centerS
        );
      }
    }
    for(let y = 0; y < mRemain; y++){
      this.center.drawCircle(
        50 + 8 * boxWidth / 7 + y * boxWidth / 7,
        boxHeight / 11 + 25 + mRow * boxHeight / 11,
        centerS
      );
    }

  for (let a = 0; a < sRow; a++){
    for (let b = 0; b < 6; b++){
      this.center.drawCircle(
        75 + 15 * boxWidth / 7 + b * boxWidth / 7,
        boxHeight / 11 + 25 + a * boxHeight / 11,
        centerS
      );
    }
  }
  for(let z = 0; z < sRemain; z++){
    this.center.drawCircle(
      75 + 15 * boxWidth / 7 + z * boxWidth / 7,
      boxHeight / 11 + 25 + sRow * boxHeight / 11,
      centerS
    );
  }
     this.center.endFill();

    // //Draw petals
    // this.petal.clear();
    // this.petal.beginFill(colorSet[0]);
    // for(let i = 0; i < hRemainF; i++){
    //   for(let j = 0; j < 6; j++){
    //     this.petal.pivot.set(petalW / 2, petalL / 2);
    //     this.petal.drawEllipse(
    //       25 + boxWidth / 2 + petalW / 2,
    //       window.innerHeight / 5 + 15 + i * boxHeight / 5 - petalL,
    //       petalW,
    //       petalL
    //     ); 

        // this.petal.angle = j * 60;
    //   }
    // }

    // for (let m = 0; m < (mRemainF + mRemainF % 2) / 2; m++){
    //   for (let n = 0; n < 2; n++){
    //     for (let j = 0; j < 6; j++){
    //       this.petal.drawEllipse(
    //         50 + 4 * boxWidth / 3 + n * boxWidth / 3,
    //         window.innerHeight / 5 + 15 + m * boxHeight / 5 - petalL,
    //         petalW,
    //         petalL
    //       );
    //     this.petal.rotation = j * 60;
    //     }
    //   }
    // }
    // for (let p = 0; p < 5; p++){
    //   for (let q = 0; q < 2; q++){
    //     this.center.drawCircle(
    //       75 + 7 * boxWidth / 3 + q * boxWidth / 3,
    //       boxHeight / 6 + 25 + p * boxHeight / 6,
    //       centerS
    //     );
    //   }
    // }
    // this.petal.endFill();

    //Draw center circles
    // this.center.clear();
    // this.center.beginFill(colorSet[1]);
    // for(let i = 0; i < 4; i++){
    //   this.center.drawCircle(
    //     25 + boxWidth / 2,
    //     window.innerHeight / 5 + 15 + i * boxHeight / 5,
    //     centerS
    //   );
    // }
    // for (let m = 0; m < 5; m++){
    //   for (let n = 0; n < 2; n++){
    //     this.center.drawCircle(
    //       50 + 4 * boxWidth / 3 + n * boxWidth / 3,
    //       boxHeight / 6 + 25 + m * boxHeight / 6,
    //       centerS
    //     );
    //   }
    // }
    // for (let p = 0; p < 5; p++){
    //   for (let q = 0; q < 2; q++){
    //     this.center.drawCircle(
    //       75 + 7 * boxWidth / 3 + q * boxWidth / 3,
    //       boxHeight / 6 + 25 + p * boxHeight / 6,
    //       centerS
    //     );
    //   }
    // }
    // this.center.endFill();
  }


  main();


   



