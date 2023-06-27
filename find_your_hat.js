const prompt = require('C:/Users/seani/node_modules/prompt-sync')({sigint: true});
// node find_your_hat.js (copy/paste for faster replayability)
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let game;
let map;

// create a random field
const generateField = (width, height) => {
        let fieldArray = [];
        for (let i = 0; i<height; i++) {
            fieldArray.push([]);
            for (let j = 0; j<width; j++) {
                fieldArray[i].push('a');
            }
        }
        for (let i = 0; i<height; i++) {
            for (let j = 0; j < width; j++) {
                let randomNum = Math.ceil(Math.random() * 10);
                if (randomNum <= 8) {
                    fieldArray[i][j] = fieldCharacter;
                } else if (randomNum <= 10) {
                    fieldArray[i][j] = hole;
                }
            }
        }
        fieldArray[0][0] = pathCharacter;
        let ran1 = Math.floor(Math.random() * width);
        let ran2 = Math.floor(Math.random() * height);
        while (ran1 == 0) {
          Math.floor(Math.random() * width);
        }
        while (ran2 == 0) {
          Math.floor(Math.random() * height);
        }
        if (ran2 < (this.height - 1) / 2) {
            ran2 += Math.floor((height - 1) / 2);
        }
        fieldArray[ran2][ran1] = hat;
        map = fieldArray;
        return fieldArray;
    }

// provide actions for the specific field
class Field {
    constructor(field) {
        this.game = 'alive';
        this.x = 0;
        this.y = 0;
    }

    // display the field as a string instead of an array for better visibility
    print() {
        let ret = '';
        for (let i = 0; i<map.length; i++) {
          for (let j = 0; j<map[i].length; j++) {
            ret += map[i][j];
          }
          ret += '\n';
        }
        return ret;
    }

    // update the traveled to locations and where the user is currently located, if the location is allowed
    moveHat(dir) {
        if ((dir.toLowerCase() == 'd') && (((this.y)+1) < map.length)) {
            this.y++;
        } else if ((dir.toLowerCase() == 'u') && (((this.y)-1) >= 0)) {
            this.y--;
        } else if ((dir.toLowerCase() == 'r') && (((this.x)+1) < map.length)) {
            this.x++;
        }else if ((dir.toLowerCase() == 'l') && (((this.x)-1) >= 0)) {
            this.x--;
        } else {
            console.log('Please type U, D, L or R. Tip: stay on the grid to move!')
        }
        if (map[this.y][this.x] == 'O') {
            console.log("Oops, you feel down a hole!");
            game = 'lost';
            return 'lost';
        }
        if (map[this.y][this.x] == '^') {
            console.log('\n\n\n\n\n------------------------------------');
            console.log("Congratulations, you found your hat!");
            console.log('------------------------------------');
            game = 'won';
            return 'won';
        }
        map[this.y][this.x] = pathCharacter;
        game = 'alive';
        return 'alive'
    }
}

// field creation
const myField = new Field(generateField(5,10));

// display initial game field
console.log(myField.print());
// continue the game, waiting the user to answer the prompt, until the player wins or loses
const userPlay = () => {
  let userIn = prompt('Where would you like to move?');
  if ((userIn == 'u') || (userIn == 'd') || (userIn == 'l') || (userIn == 'r')) {
    myField.moveHat(userIn);
  }
  if (game == 'won') {
    console.log('You finished. To play again type "clear" in the terminal and run the file again!');
    console.log('--------------------------------------------------------------------------------\n\n\n\n\n');
  } else if (game == 'lost') {
    console.log('You lost. To try again type "clear" in the terminal and run the file again!');
    console.log('---------------------------------------------------------------------------\n\n\n\n\n');
  }
  console.log(myField.print());
  return userPlay();
}

// initate game
userPlay();