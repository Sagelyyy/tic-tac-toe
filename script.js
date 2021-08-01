const GAMEBOARD = (function(){
    let board = [
        [0,0],[0,1],[0,2],
        [1,0],[1,1],[1,2],
        [3,0],[3,1],[3,2]
    ];

    const boardSetup = () =>{
        let tiles = document.querySelectorAll('.item')
        tiles.forEach(
            function(item){
                item.addEventListener("click", (e)=>{
                    if(e.target != document.body)
                    e.target.textContent = 'X'
                })
        })
    }

    return{
        boardSetup
    }
})();

GAMEBOARD.boardSetup()
