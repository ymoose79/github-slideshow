const btnChoose = document.querySelector('.btn-choose');
const modal = document.querySelector('.choice-modal');
const overlay = document.querySelector('.overlay');
const btnX = document.querySelector('.btn-X');
const btnO = document.querySelector('.btn-O');

// adds a click event to all cells then calls a funtion to handle assign it
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));


const removeHidden = function(x){
    document.querySelector(x).classList.remove('hidden');
}

const addHidden = function(add){
    document.querySelector(add).classList.add('hidden');
}

const hideAfterPlayer1Chooses = function(){
    addHidden('.choice-modal');
    addHidden('.btn-X');
    addHidden('.btn-O');
    addHidden('.overlay');
    addHidden('.btn-choose');
}

let player1;
let currentPlayer;

let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""]


//  adding element after the fact...
const message = document.createElement('div');
const btnAgain = document.createElement('button');
const left = document.querySelector('.left');



//          OPENS Modal ******************************
btnChoose.addEventListener('click', function(){

    // removeHidden(player1HasChosen)
    removeHidden('.choice-modal');
    removeHidden('.btn-X');
    removeHidden('.btn-O');
    removeHidden('.overlay');

})

//         player1 chooses X       ***************************

btnX.addEventListener('click', function(){
    removeHidden('.P1-x');
    removeHidden('.P2-o');

    hideAfterPlayer1Chooses();
    currentPlayer = "X";
    player1 = "X";
})

//         player1 chooses O       ***************************

btnO.addEventListener('click', function(){
    removeHidden('.P1-o');
    removeHidden('.P2-x');

    hideAfterPlayer1Chooses();
    currentPlayer = "O";
    player1 = "O";
})




// ************************************************************
//          code from "pure and simple tic tac toe"
// ************************************************************

//         game code      ***************************
//        grab the cell Index     ***************************

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    // below gives corresponding cell index
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));


    //  delete this line to make code run?...
    if (gameState[clickedCellIndex] !== '') /*|| !gameActive)*/ {
        return;
    }       

    // clickedCell = html, clickedCellIndex for the gameState[]
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}



function handleCellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const winning = [  //  gameState[-,-,-,-,-,-,-,-,-]
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]





// // // decide if game's won;


// // ***********************************************************
// // ***********************************************************
// let unClickedCell = gameState.forEach(function (x) {
//     x === '';
// });
// // ***********************************************************
// // ***********************************************************

const handleResultValidation = function () {
    //     gameActive:  check for unclicked cells;
    for (let i = 0; i < gameState.length; i++) {
        if (gameState[i] == '') {
            activeGame = true;
        } else {
            activeGame = false;
        }

    }
    
    if (gameActive === true) {
        //             // test for winner

        for (i = 0; i < winning.length; i++) {
            const win = winning[i];
            let a = gameState[win[0]];
            let b = gameState[win[1]];
            let c = gameState[win[2]];
            if (a === b && b === c && a !== '') {
               
                removeHidden('.overlay');
                message.classList.add('choice-modal')
                btnAgain.classList.add('btn-X')
                message.innerHTML = `The <strong> ${a}'s </strong> Win!!!! <br> <button class="btn btn--again">Play Again!</button>`;
                
                left.prepend(message);
                gameActive === false;
                return;
            }
            
        }
        

        
        if (gameActive === false) {
            
            removeHidden('.overlay');
            message.classList.add('choice-modal')
            btnAgain.classList.add('btn-X')
            message.innerHTML = `It's a <strong> Draw!!! </strong> <br> <button class="btn btn--again">Play Again!</button>`;
            
            left.prepend(message);
            return;
        }
    }
        
}
                
                    // removeHidden('.overlay');
                    // message.classList.add('choice-modal')
                    // btnAgain.classList.add('btn-X')
                    // message.innerHTML = `The <strong> ${a}'s </strong> Win!!!! <br> <button class="btn btn--again">Play Again!</button>`;
                    
                    // left.prepend(message);
                    // gameActive === false;
                    // return;
//                 }
//                 //         else if () {

//                 // } else () {
            
//                 // }
//             }
//         }
        
// }
  

//     // for (i = 0; i < winning.length; i++) {
//     //     const win = winning[i];
//     //     let a = gameState[win[0]];
//     //     let b = gameState[win[1]];
//     //     let c = gameState[win[2]];
        
       
// //             // check for winner
// //             if (a === b && b === c && a !== '') {
                
// //                 removeHidden('.overlay');
// //                 message.classList.add('choice-modal')
// //                 btnAgain.classList.add('btn-X')
// //                 message.innerHTML = `The <strong> ${a}'s </strong> Win!!!! <br> <button class="btn btn--again">Play Again!</button>`;

// //                 left.prepend(message);
// //                 return;

// //             } if (a === '' || b === '' || c === '') {
// //                 continue;
// //             } 
// //         }
// //     } else {
// //         removeHidden('.overlay');
// //                 message.classList.add('choice-modal')
// //                 btnAgain.classList.add('btn-X')
// //                 message.innerHTML = `It's a  <strong> DRAW!! </strong> <br> <button class="btn btn--again">Play Again!</button>`;

// //                 left.prepend(message);
// //                 return;
// //     }
// // } 

// ******************------------------------------
// ******************------------------------------
// ******************------------------------------
// ******************------------------------------
// const handleResultValidation = function () {
//     let roundWon = false;
//     for (i = 0; i < winning.length; i++) {
//     const win = winning[i];
//     let a = gameState[win[0]];
//         let b = gameState[win[1]];
//         let c = gameState[win[2]];
//         if (a === '' || b === '' || c === '') {
//             continue;
//         }
        

//     if (a === b && b === c && a!== '') {
//             roundWon = true;
            
//             removeHidden('.overlay');
//             message.classList.add('choice-modal')
//             btnAgain.classList.add('btn-X')
//             message.innerHTML = `The <strong> ${a}'s </strong> Win!!!! <br> <button class="btn btn--again">Play Again!</button>`;

//             left.prepend(message);
//             return;
//         } if (roundWon) {
//             gameActive = false;
            
//             removeHidden('.overlay');
//             message.classList.add('choice-modal')
//             message.innerHTML = `It's A <strong> Draw!! </strong> <br> <button class="btn btn--again">Play Again!</button>`;
//         }

//         left.prepend(message);
        
//         return
//     }
// }





