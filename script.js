const players = function(name , sign){
    return {name: name , sign: sign}
}

const GameBoard =(function(){
    let gameBoard=[];
    let gameArray = [];
    let playerTurn='playerOne'
    let playerOne = "";
    let playerTwo = "";
    const resetData=function(){
        gameBoard=[];
        gameArray = [];
        playerTurn='playerOne'
        playerOne = "";
        playerTwo = "";
    }
    const getPlayersNames = function(){
        let playerOneName = document.getElementById('player-one').value;
        let playerTwoName = document.getElementById('player-two').value;
        if (playerOneName == ''){
            document.getElementById('player-one').placeholder= "please Enter your name";
        }
        if (playerTwoName == ''){
            document.getElementById('player-two').placeholder = 'please Enter your name';
        }
        if(playerTwoName!='' && playerOneName!=''){
        return([playerOneName ,playerTwoName]);
        }else{
            return;
        }
    }
    const startGame = function(){
        getPlayersNames();
        playerOne = players(getPlayersNames()[0], "X");
        playerTwo = players(getPlayersNames()[1], "O");
        playRound();
    }
    const initializeGame =function(){
        resetData(); 
        document.getElementById('start').addEventListener('click', startGame)
    }
    const playRound = function() {
        document.getElementById('game-start').style.display='none'
        document.getElementById('gameBoardContainer').style.display='grid'
        document.querySelectorAll('.spot').forEach ((spot)=>{
            spot.addEventListener("click",function(e){
                let spotIndex = e.target.dataset.spot;
                if(e.target.firstChild == null){
                    render(e, spotIndex);
                    alertWinner();
                }else{
                    return;
                }  
            })
        })
    }

    const render = function(e,a){
         if (playerTurn == 'playerOne'){
            gameBoard[a]= playerOne.sign;
            gameArray.push(playerOne.sign);
            e.target.innerHTML = playerOne.sign;
            playerTurn ='playerTwo'
            
        }else{
            gameBoard[a]=playerTwo.sign;
            gameArray.push(playerTwo.sign);
            e.target.innerHTML = playerTwo.sign;
            playerTurn ='playerOne'
        }
    }
    const playAgain= function() {
        document.getElementById('play-again').addEventListener('click', ()=> {
            document.querySelectorAll('.spot').forEach ((spot)=>{spot.innerHTML=''});
            document.getElementById('score').style.display='none';
            document.getElementById('game-start').style.display='flex';
            initializeGame();
        })
    }
    const alertWinner = function(){
        let score = document.getElementById('score')
        if (checkWinPlayerOne() == 1){ 
            document.getElementById('gameBoardContainer').style.display='none'
            score.style.display='flex'
            score.innerHTML= `Congratulations ${playerOne.name} you won
            <button id="play-again" >Play Again</button>`
            playAgain();
            return
        }
            
        if (checkWinPlayerTwo() == 1){ 
            document.getElementById('gameBoardContainer').style.display='none'
            score.style.display='flex'
            score.innerHTML= `Congratulations ${playerTwo.name} you won
            <button id="play-again" >Play Again</button>`
           playAgain();
            return
        }
        if (gameArray.length == 9){ 
            document.getElementById('gameBoardContainer').style.display='none'
            score.style.display='flex'
            score.innerHTML= `It's a tie. Good luck next time
            <button id="play-again" >Play Again</button>`
           playAgain();
            return
        }
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
    initializeGame();
})();