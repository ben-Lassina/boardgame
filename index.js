console.log("test");
let game;
function init() 
{
    game = new Game();
}
class Player
{
    constructor(index)
    {
        this.index = index;
        this.atfile = 0;
        this.pawn = document.getElementsByClassName("pawn" + index)[0];
        this.pawn.style.display = "block";
    }
}
class Tile 
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}

class Game
{
    constructor()
    {
        this.className = document.getElementsByClassName('board')[0];
        this.className.getElementsByClassName.display = ("winner")[0];
        this.selectplayerdiv = document.getElementsByClassName("selectplayers")[0];
        this.playerturnDiv = document.getElementsByClassName('playerturn') [0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        
        this.tiles = [];
        this.players = [];
        this.playerturn = 0;
        this.setupBoard();
    }
    setupBoard()
    {
        //1 = right, 0 = up , 3 = left
        let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3,
             3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 
             3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        let x = 0;
        let y = 10;
        let tilesize = 55;

        for (var i =0; i < path.length; i++)
        {
                let cmd = path[i];
                if (cmd == 1)
                {
                    //right
                    x++;
                }
                else if (cmd == 3)
                {
                    //left
                    x--;
                }
                else if (cmd == 0)
                {
                    //up
                    y--;
                }

               let div = this.makeBoardDiv(x * tilesize, y * tilesize,  i + 1)

               let tile = new Tile(div);
               this.tiles.push(tile);
       
        }
    }
    setupGotos()
    {
        //let op deze coordinaten
        let goto = [[6, 14], [16, 4], [17, 23], [27, 33], [29, 10], [38, 43], [39, 20], [45, 34]];

        for (var i = 0; i < goto.length; i++ );
        {
            let element =goto[0];
            
            let start = element[0] -1;
            let end = element[1] -1;

            let tile = this.tiles[start];
            tile.goto = end;
        }
    }
    start(amountOfPlayers)
    {
        function selectplayers
        document.getElementsByClassName("selectplayers")
        //winner hide
         
        //pawns alle 4 hide -> selectie op de class pawn

        //players aanmaken

        //eerste beurt starten
        //playerturn =-1;

    }
    moveToNextPlayer()
    {
        //playerturn ophogen naar de volgende
        //playerturn groter dan aantalspelers ?
        //dan willen we terug naar de eerste speler

        //draw aanroepen
    }
    draw()
    {
        //voor elke speler 
        //pawn neerzetten op de huidige locatie van de speler
        //setPawn
    }
    roll()
    {
        function rollDice() {
            return min + Math.floor(Math.random() (max - min + 1));
        }
        const rollDice6 = rollDice(1, 6);
    }
    setPawn(player1, atTile){
        //halen de tile op voor atTile
        //die heeft een style met left/top in het pixel formaat 10px;
        
        //player heeft een pawn html element bewaard
        //die heeft een style, en daar kun je dus de left/top van de tile opzetten
    }
    makeBoardDiv(x, y, tileDisplayNumber)
    {
        let div = document.createElement("div");

        div.className = "tile";
        div.style.left = x +"px";
        div.style.top = y +"px";
        div.textContent = tileDisplayNumber;

        this.boardDiv.appendChild(div);

        return div
    }
}
