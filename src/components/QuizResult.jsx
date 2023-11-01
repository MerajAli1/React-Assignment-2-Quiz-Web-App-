import './App.css'
const QuizResult = ({ score, totalScore, tryAgain }) => {
    return (
        <>
            <div className='result-container'>
                Your Score:{score}<br />
                Total Score:{totalScore}
            </div>
            <div className='play-again-btn-container' >
                <button className="play-again-btn" onClick={tryAgain}>
                    Play Again
                </button>
            </div>
        </>
    )
}
export default QuizResult
