const GAMEBOARD = (function(){
    let board = [
        [0,0],[0,1],[0,2],
        [1,0],[1,1],[1,2],
        [3,0],[3,1],[3,2]
    ];

    const boardSetup = () =>{
        const tiles = document.querySelectorAll('.item')
        tiles.forEach(
            function(item){
                item.addEventListener("click", (e)=>{
                    if(e.target != document.body){
                        turn = PLAYERS.playerTurn()
                        e.target.textContent = turn
                        PLAYERS.setPlayerSymbols()
                    }

                })
        })
    }

    const boardReset = () => {
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
        setPlayerSymbols
    }
})();

GAMEBOARD.boardSetup()
