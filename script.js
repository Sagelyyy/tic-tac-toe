const GAMEBOARD = (function(){
    let board = [
        [null],[null],[null],
        [null],[null],[null],
        [null],[null],[null]
    ];

    function checkGameState() {
        let winnerText = document.querySelector('.winner-declare')
        let player1Name = PLAYERS.getPlayerName(0)
        let player2Name = PLAYERS.getPlayerName(1)
        for(i = 0; i < 8; i++){
            if(board[0] == 'X' && board[1] == 'X' && board[2] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[3] == 'X' && board[4] == 'X' && board[5] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[6] == 'X' && board[7] == 'X' && board[8] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[0] == 'X' && board[4] == 'X' && board[6] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[1] == 'X' && board[5] == 'X' && board[7] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[2] == 'X' && board[6] == 'X' && board[8] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[0] == 'X' && board[4] == 'X' && board[8] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
            if(board[2] == 'X' && board[4] == 'X' && board[6] == 'X'){
                winnerText.style.color = 'red'
                winnerText.textContent = `${player2Name} wins!`
            }
        }
        for(i = 0; i < 8; i++){
            if(board[0] == 'O' && board[1] == 'O' && board[2] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[3] == 'O' && board[4] == 'O' && board[5] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[6] == 'O' && board[7] == 'O' && board[8] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[0] == 'O' && board[4] == 'O' && board[6] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[1] == 'O' && board[5] == 'O' && board[7] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[2] == 'O' && board[6] == 'O' && board[8] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[0] == 'O' && board[4] == 'O' && board[8] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
            if(board[2] == 'O' && board[4] == 'O' && board[6] == 'O'){
                winnerText.style.color = 'blue'
                winnerText.textContent = `${player1Name} wins!`
            }
        }
    }
    function colorBoard(){
        const tiles = document.querySelectorAll('.item')
        for(i=0;i<tiles.length;i++){
            if(tiles[i].textContent == 'X'){
                tiles[i].style.color == 'red'
            }
        }
    }
    const boardSetup = () =>{
        const tiles = document.querySelectorAll('.item')
        tiles.forEach(
            function(item){
                item.addEventListener("click", (e)=>{
                    if(e.target != document.body &&
                        e.target.textContent != 'X' &&
                        e.target.textContent != 'O'){
                        turn = PLAYERS.playerTurn()
                        e.target.textContent = turn
                        colorBoard()
                        console.log(e.target.textContent)
                        PLAYERS.setPlayerSymbols()
                        switch(e.target.id){
                            case '0,0':
                                board[0] = turn
                                break;
                            case '0,1':
                                board[1] = turn
                                break;
                            case '0,2':
                                board[2] = turn
                                break;
                            case '1,0':
                                board[3] = turn
                                break;
                            case '1,1':
                                board[4] = turn
                                break;
                            case '1,2':
                                board[5] = turn
                                break;
                            case '3,0':
                                board[6] = turn
                                break;
                            case '3,1':
                                board[7] = turn
                                break;
                            case '3,2':
                                board[8] = turn
                                break;    

                        }
                        checkGameState()
                    }

                })
        })
    }

    const boardReset = () => {
        for(i = 0; i< board.length; i++){
            board[i] = null
        }
        const tiles = document.querySelectorAll('.item')
        tiles.forEach (
            function(item){
                item.textContent = ""
            }
        )
    }

    return{
        boardSetup,
        boardReset,
        board,
        checkGameState
    }
})();


const PLAYERS = (function(){ 
    _players = [];
    const symbolArray = ["X", "O"]

    const createPlayer = () =>{
        pName = document.querySelector('.playerInput').value
        symbol = symbolArray.pop()
        myTurn = Math.floor(Math.random() * 2)
        switch (myTurn){
            case 0:
                myTurn = false
                break
            case 1:
                myTurn = true
                break
        }
        player = {pName, symbol, myTurn}
        if(_players.length == 1){
            if(_players[0].myTurn = true)
            player.myTurn = false
        }else{
            player.myTurn = true
        }
        if(_players.length < 2){
            _players.push(player)
        }
        document.querySelector('.playerInput').value = ''
        getPlayerNames()
    }

    function getPlayerName(playerId){
        let tempArray = []
        for(i = 0; i < _players.length; i++){
            tempArray.push(_players[i].pName)
        }
        return(tempArray[playerId])
    }

    function getPlayerNames(){
        let tempArray = []
        for(i = 0; i < _players.length; i++){
            tempArray.push(_players[i].pName)
        }
        showPlayers(tempArray)
    }

    function showPlayers(pArray) {

        let pPlayer1 = document.querySelector('.player1')
        let pPlayer1ID = getPlayerSymbol(0)
        let pPlayer2 = document.querySelector('.player2')
        let pPlayer2ID = getPlayerSymbol(1)
        pPlayer1.textContent = `${pArray[0]}: ${pPlayer1ID}`
        if(pArray.length > 1){
            pPlayer2.style.color = 'red'
            pPlayer2.textContent = `${pArray[1]}: ${pPlayer2ID}`
        }
    }

    function playerTurn(){
        for(i = 0; i < _players.length; i++){
            if(_players[i].myTurn == true){
                return _players[i].symbol
            }
        }
    }

    function getPlayerSymbol(playerId){
        for(i = 0; i < _players.length; i++){
            if(i == playerId){
                return _players[i].symbol
            }
        }
    }

    function setPlayerSymbols(){
        for(i = 0; i < _players.length;i++){
            if(_players[i].myTurn == true){
                _players[i].myTurn = false
            }else{
                _players[i].myTurn = true
            }
        }
    }



    function getPlayerTurn(playerId){
        for(i = 0; i < _players.length; i++){
            if(i == playerId){
                return _players[i].myTurn
            }
        }
    }
    return{
        createPlayer,
        getPlayerSymbol,
        getPlayerTurn,
        playerTurn,
        setPlayerSymbols,
        showPlayers,
        getPlayerNames,
        getPlayerName
    }
})();

GAMEBOARD.boardSetup()
