import { useState } from "react"
import { quizData } from "./quizData"
import QuizResult from "./QuizResult"
import './App.css'
const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [clickQuestion, setClickQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const nextQuestion = () => {
        checkQuestion()
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
            setClickQuestion(0)
        } else {
            setShowResult(true)
        }
    }
    const checkQuestion = () => (clickQuestion === quizData[currentQuestion].answer)
        ? setScore((score) => score + 1) : console.log("QUIZ FINISHED")

    const reset = () => {
        setCurrentQuestion(0)
        setClickQuestion(0)
        setShowResult(false)
        setScore(0)
    }
    return (
        <>
            <h1>QUIZ WEB-APP USING REACT</h1>
            <div className="container">
                <div className="mainContainer">
                    {showResult ? (
                        <QuizResult tryAgain={reset} score={score} totalScore={quizData.length} />) : (
                        <>
                            <div className="question">
                                <span className="current-question">{currentQuestion + 1} </span>
                                <span className="question-text">{quizData[currentQuestion].question}</span>
                            </div>
                            <div className="option-container">
                                {quizData[currentQuestion].options.map((e, i) => <button
                                    onClick={() => setClickQuestion(i + 1)} key={i}
                                    className={`option-btn ${clickQuestion == i + 1 ? "checked" : null}`}>{e}</button>)}
                            </div>
                            <div className="next-btn">
                                <input onClick={nextQuestion} type="button" value="Next" />
                            </div>
                        </>)}
                </div>
            </div >
        </>
    )
}
export default Quiz