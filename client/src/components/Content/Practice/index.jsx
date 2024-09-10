import Question from "./components/Question"
import { useStore } from "../../../store";
import { useEffect, useState } from "react";

export default function Practice(){
    const {state} = useStore();
    const [questions, setQuestions] = useState([])
    const [questionArray, setQuestionArray] = useState([])
    const [questionsLeft, setQuestionsLeft] = useState(0) //questions.length
    const [showStart, setShowStart] = useState(true)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showEnd, setShowEnd] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [nextQuestion, setNextQuestion] = useState(false)
    const [questionArrayNumber, setQuestionArrayNumber] = useState(0)
    const [showHint, setShowHint] = useState(false)
    const [difficulty, setDifficulty] = useState('Easy')
    const [mode, setMode] = useState('Call')

    useEffect(()=>{ //on load, gets questions from backend
        const fetchQuestions = async () => {
            try {
                const res = await fetch('/api/questions')
                const data = await res.json()
                console.log(data)
                setQuestions(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchQuestions()
    },[])

    useEffect(()=>{ //sets mutable array and length
        setQuestionArray(questions)
        setQuestionsLeft(questions.length)
    },[questions])

    useEffect(()=>{
        if(showStart){ //if start screen is shown reset the question number
            setQuestionNumber(0)
            randomizeChoices()
            setShowHint(false)
        }
        else{ //if turned off, start questions
            setQuestionNumber(1)
            getNextQuestion()
        }
    },[showStart])

    useEffect(()=>{
        if(nextQuestion){ 
            if(questionsLeft > 0){
                getNextQuestion()
                setQuestionArray(old => {return old.filter((_,i)=> i !== questionArrayNumber)})
            }
            else {
                setShowEnd(true)
                setShowQuestions(false)
            }
            setNextQuestion(false)
        }
    },[nextQuestion])

    const triggerNextQuestion = () => {
        setQuestionNumber(questionNumber + 1) //triggers addition of question number when answer is clicked
        setQuestionsLeft(questionsLeft - 1)
        setShowHint(false)
        setNextQuestion(true)
    }

    const getNextQuestion = () => {
        setQuestionArrayNumber(Math.floor(Math.random() * questionsLeft))
    }

    function handleBegin(){
        setShowStart(false)
        setShowQuestions(true)
    }

    function handleBack(){
        setShowStart(true)
        setShowQuestions(false)
        setShowEnd(false)
        setQuestionArray(questions)
        setQuestionsLeft(questions.length)
    }

    function handleHint(){
        setShowHint(true)
    }

    function handleDifficulty(){
        if (difficulty === 'Easy'){
            setDifficulty('Hard')
        }
        else{
            setDifficulty('Easy')
        }
    }

    function handleMode(){
        if (mode === 'Call'){
            setMode('Picture')
        }
        else if(mode === 'Picture'){
            setMode('Call & Picture')
        }
        else{
            setMode('Call')
        }
    }

    function randomizeChoices(){ //randomize choices before game begins
        questions.forEach((element) => {element.choices.sort(function(){return 0.5 - Math.random()})})
    }
    
    return(
        <section id="practice">
            { showStart && <section id="start-card">
                <h1>Identification Practice</h1>
                <div className="start-text">
                    <p>Identify the bird!</p>
                    <p>Select the difficulty and mode below before you begin.</p>
                </div>
                <section className="difficulty">
                    <p>Difficulty:</p>
                    <a onClick={handleDifficulty}>{difficulty}</a>
                    <p>Mode:</p>
                    <a onClick={handleMode}>{mode}</a>
                </section>
                <a onClick={handleBegin}>Begin</a>
                
            </section>}
            {showQuestions && <section id="question-card">
                <h2>Question {questionNumber}</h2>
                <Question name={questionArray[questionArrayNumber].name} text={questionArray[questionArrayNumber].text} img={questionArray[questionArrayNumber].img} 
                call={questionArray[questionArrayNumber].call} choices={questionArray[questionArrayNumber].choices} nextQuestion={triggerNextQuestion} hint={showHint} difficulty={difficulty} mode={mode}/>
                <a className="back" onClick={handleBack}>Back</a>
                {mode === 'Call' && <a className="hint" onClick={handleHint}>Hint</a>}
            </section>}
            {showEnd && <section id="endCard">
                <h2>You've completed the practice!</h2>
                <a onClick={handleBack}>Practice Again</a>
            </section>}
        </section>
        
    )
}