import Question from "./components/Question"
import { useStore } from "../../../store";
import { useEffect, useState } from "react";

const questions = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        call: "/Birds/Calls/AMEROB_1.songnum1_NYle.mp3",
        text: "What bird is this?"
    },
    {
        name: "Blue Jay",
        img: "/Birds/Images/Blue-Jay.jpg",
        call:"/Birds/Calls/BLUJAY_1.jaycallsampclicks_FLle_1.mp3",
        text: "What bird is this?"
    },
    {
        name: "Northern Cardinal",
        img: "/Birds/Images/Male-Northern-Cardinal.jpg",
        call:"/Birds/Calls/NORCAR_1.songsnum1_NYle_1.mp3",
        text: "What bird is this?"
    },
    {
        name: "Mourning Dove",
        img: "/Birds/Images/Mourning-Dove.jpg",
        call:"/Birds/Calls/MOUDOV_1.cooamppartialcoo_NYle_1.mp3",
        text: "What bird is this?"
    }
]

export default function Practice(){
    const {state} = useStore();
    const [questionArray, setQuestionArray] = useState(questions)
    const [questionsLeft, setQuestionsLeft] = useState(questions.length)
    const [showStart, setShowStart] = useState(true)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showEnd, setShowEnd] = useState(false)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [nextQuestion, setNextQuestion] = useState(false)
    const [questionArrayNumber, setQuestionArrayNumber] = useState(0)
    const [showHint, setShowHint] = useState(false)

    useEffect(()=>{
        if(showStart){ //if start screen is shown reset the question number
            setQuestionNumber(0)
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
        console.log(questionsLeft)
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
    
    return(
        <section id="practice">
            { showStart && <section id="start-card">
                <h1>Identification Practice</h1>
                <p>Identify the bird from their call! If you need a hint, you can view their image by clicking the hint button.</p>
                <a onClick={handleBegin}>Begin</a>
            </section>}
            { showQuestions && <section id="question-card">
                <h2>Question {questionNumber}</h2>
                <Question name={questionArray[questionArrayNumber].name} text={questionArray[questionArrayNumber].text} img={questionArray[questionArrayNumber].img} 
                call={questionArray[questionArrayNumber].call} nextQuestion={triggerNextQuestion} hint={showHint}/>
                <a className="back" onClick={handleBack}>Back</a>
                <a className="hint" onClick={handleHint}>Hint</a>
            </section>}
            {   showEnd && <section id="endCard">
                <h2>You've completed the practice!</h2>
                <a onClick={handleBack}>Practice Again</a>
            </section>}
        </section>
        
    )
}