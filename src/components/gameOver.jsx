export default function GameOver({winner}){
    return <div id="game-over">
        <h1>Game Over!</h1>
        <p>{winner} won!</p>
        <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
}