import Question from "./components/Question"
import { useStore } from "../../../store";
import { useEffect, useState } from "react";

const questions = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        call: "/Birds/Calls/AMEROB_1.songnum1_NYle.mp3",
        text: "What bird is this?",
        choices: ['American Robin','Song Sparrow','Northern Cardinal','House Finch']
    },
    {
        name: "Blue Jay",
        img: "/Birds/Images/Blue-Jay.jpg",
        call:"/Birds/Calls/BLUJAY_1.jaycallsampclicks_FLle_1.mp3",
        text: "What bird is this?",
        choices: ['Tufted Titmouse','Blue Jay','Northern Cardinal','Song Sparrow']
    },
    {
        name: "Northern Cardinal",
        img: "/Birds/Images/Male-Northern-Cardinal.jpg",
        call:"/Birds/Calls/NORCAR_1.songsnum1_NYle_1.mp3",
        text: "What bird is this?",
        choices: ['American Robin','Blue Jay','Northern Cardinal','Mourning Dove']
    },
    {
        name: "Mourning Dove",
        img: "/Birds/Images/Mourning-Dove.jpg",
        call:"/Birds/Calls/MOUDOV_1.cooamppartialcoo_NYle_1.mp3",
        text: "What bird is this?",
        choices: ['American Robin','White-breasted Nuthatch','House Finch','Mourning Dove']
    },
    {
        name: "American Goldfinch",
        img: "/Birds/Images/American-Goldfinch.jpg",
        call:"/Birds/Calls/AMEGOL_1.songnum1_UTkc_1.mp3",
        text: "What bird is this?",
        choices: ['American Robin','American Goldfinch','Northern Cardinal','Mourning Dove']
    },
    {
        name: "House Finch",
        img: "/Birds/Images/House-Finch.jpg",
        call:"/Birds/Calls/HOUFIN_1.songnum1_NYle_1.mp3",
        text: "What bird is this?",
        choices: ['Song Sparrow','Blue Jay','Northern Cardinal','House Finch']
    },
    {
        name: "Song Sparrow",
        img: "/Birds/Images/Song-Sparrow.jpg",
        call:"/Birds/Calls/SONSPA_1.songsnum1_NYle_1.mp3",
        text: "What bird is this?",
        choices: ['American Robin','White-breasted Nuthatch','American Goldfinch','Song Sparrow']
    },
    {
        name: "Tufted Titmouse",
        img: "/Birds/Images/Tufted-Titmouse.jpg",
        call:"/Birds/Calls/TUFTIT_1.songsnum1_OHle_1.mp3",
        text: "What bird is this?",
        choices: ['Tufted Titmouse','Blue Jay','Northern Cardinal','Mourning Dove']
    },
    {
        name: "White-breasted Nuthatch",
        img: "/Birds/Images/White-Breasted-Nuthatch.jpg",
        call:"/Birds/Calls/WHBRNU_1.songnum1_NYle_1.mp3",
        text: "What bird is this?",
        choices: ['Tufted Titmouse','Blue Jay','White-breasted Nuthatch','Mourning Dove']
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
    const [difficulty, setDifficulty] = useState('Easy')
    const [mode, setMode] = useState('Call')

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
            { showQuestions && <section id="question-card">
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