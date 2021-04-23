const players = function(name , sign){
    return {name: name , sign: sign}
}
const GameBoard =(function(){
    const gameBoard=[];
    const gameArray = [];
    const playerOne = players("Karim", "X");
    const playerTwo = players("krimo", "O");
    
    let spot= document.querySelectorAll('.spot');
    let i=0;

    const displayBoard = function(e){
        let spotIndex = e.target.dataset.spot;
        if(checkSpot(e)==1){
        playerSign = document.createElement('h6');
        this.appendChild(playerSign);
        playerTurn;
        render(spotIndex);
        alertWinner();
        }else{
            return;
        }
    }

    spot.forEach (function(target){
        target.addEventListener("click",displayBoard);
        });
       
    const checkSpot= function(a){
        let i=1;
        if(a.target.firstChild== null){
            return(i);
        }else{
            return(i=0);
        }
    }
    const playerTurn= function(){
        if(i==0){
            i=1;
            return (i)
        } else{
            i=0;
            return(i);
        }
    }
    const render = function(a){
         if (playerTurn() == 1){
            gameBoard[a]= playerOne.sign;
            gameArray.push(playerOne.sign);
            playerSign.innerHTML= playerOne.sign;
            
        }else{
            gameBoard[a]=playerTwo.sign;
            gameArray.push(playerTwo.sign);
            playerSign.innerHTML= playerTwo.sign;
        }
    }
    const alertWinner = function(){
        if (checkWinPlayerOne() == 1){ alert("player one  yaaaaaaay"); return};
        if (checkWinPlayerTwo() == 1){ alert("player two  yaaaaaaay"); return};
        if (gameArray.length == 9){ alert("aaaaah its a draww")};
    }
    const checkWinPlayerOne = function(){
        if(gameBoard[0]==playerOne.sign && gameBoard[1]== playerOne.sign && gameBoard[2] == playerOne.sign){return(1)}
        if(gameBoard[3]==playerOne.sign && gameBoard[4]== playerOne.sign && gameBoard[5] == playerOne.sign){return(1)}
        if(gameBoard[6]==playerOne.sign && gameBoard[7]== playerOne.sign && gameBoard[8] == playerOne.sign){return(1)}
        if(gameBoard[0]==playerOne.sign && gameBoard[3]== playerOne.sign && gameBoard[6] == playerOne.sign){return(1)}
        if(gameBoard[1]==playerOne.sign && gameBoard[4]== playerOne.sign && gameBoard[7] == playerOne.sign){return(1)}
        if(gameBoard[2]==playerOne.sign && gameBoard[5]== playerOne.sign && gameBoard[8] == playerOne.sign){return(1)}
        if(gameBoard[0]==playerOne.sign && gameBoard[4]== playerOne.sign && gameBoard[8] == playerOne.sign){return(1)}
        if(gameBoard[6]==playerOne.sign && gameBoard[4]== playerOne.sign && gameBoard[2] == playerOne.sign){return(1)}
    }
    const checkWinPlayerTwo = function(){
        if(gameBoard[0]==playerTwo.sign && gameBoard[1]== playerTwo.sign && gameBoard[2] == playerTwo.sign){return(1)}
        if(gameBoard[3]==playerTwo.sign && gameBoard[4]== playerTwo.sign && gameBoard[5] == playerTwo.sign){return(1)}
        if(gameBoard[6]==playerTwo.sign && gameBoard[7]== playerTwo.sign && gameBoard[8] == playerTwo.sign){return(1)}
        if(gameBoard[0]==playerTwo.sign && gameBoard[3]== playerTwo.sign && gameBoard[6] == playerTwo.sign){return(1)}
        if(gameBoard[1]==playerTwo.sign && gameBoard[4]== playerTwo.sign && gameBoard[7] == playerTwo.sign){return(1)}
        if(gameBoard[2]==playerTwo.sign && gameBoard[5]== playerTwo.sign && gameBoard[8] == playerTwo.sign){return(1)}
        if(gameBoard[0]==playerTwo.sign && gameBoard[4]== playerTwo.sign && gameBoard[8] == playerTwo.sign){return(1)}
        if(gameBoard[6]==playerTwo.sign && gameBoard[4]== playerTwo.sign && gameBoard[2] == playerTwo.sign){return(1)}
    }
   

return(gameBoard);
})();