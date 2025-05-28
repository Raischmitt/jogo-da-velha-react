const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        
            gameBoard[row][col] = player;
        }

        // const [gameBoard, setGameboard] = useState(initialGameBoard);

        // const handleSelectSquare = (rowIndex, colIndex) => {
        //     setGameboard((prevGameBoard) => {
        //         const uptadeBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        //         uptadeBoard[rowIndex][colIndex] = activePlayerSymbol;
        //         return uptadeBoard;
        //     });
        //     onSelectSquare();
        // }

        return (
            <>
                <ol id="game-board">
                    {gameBoard.map((row, rowindex) => (
                        <li key={rowindex}>
                            <ol>
                                {row.map((playerSymbol, colIndex) => (
                                    <li key={colIndex}>
                                        <button onClick={() => onSelectSquare(rowindex, colIndex)}>{playerSymbol}</button>
                                    </li>
                                ))}
                            </ol>
                        </li>
                    ))}

                </ol>
            </>
        )
    }