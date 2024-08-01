import { useState } from "react"

export default function Question(props){
    const [answer, setAnswer] = useState('')
    const [wrongAnswerCount, setWrongAnswerCount] = useState(0) //waits 3 wrong answers before showing the image
    const [wrong,setWrong] = useState(false)
    const [wrongText, setWrongText] = useState('That\'s not it.')
    const [correct, setCorrect] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        if(props.name === answer){
            setWrong(false)
            setCorrect(true)
            setWrongAnswerCount(0)
            setTimeout(()=>{ //wait 3 sec before going to next question
                props.nextQuestion()
                setCorrect(false)
                
            }, "3000")
            return
        }
        setWrongAnswerCount(wrongAnswerCount + 1)
        setWrong(true)
        if(wrongText === 'That\'s not it.'){
            setWrongText('Try again.')
        }
        else{
            setWrongText('That\'s not it.')
        }
    }

    function handleChoice(element){
        if(props.name === element){
            setWrong(false)
            setCorrect(true)
            setWrongAnswerCount(0)
            setTimeout(()=>{ //wait 3 sec before going to next question
                props.nextQuestion()
                setCorrect(false)
                
            }, "3000")
            return
        }
        setWrongAnswerCount(wrongAnswerCount + 1)
        setWrong(true)
        if(wrongText === 'That\'s not it.'){
            setWrongText('Try again.')
        }
        else{
            setWrongText('That\'s not it.')
        }
    }

    return(
        <section id="question">
            <p>{props.text}</p>
            {(props.mode === 'Call' || props.mode === 'Call & Picture') && <audio controls src={props.call}></audio>}
            {(props.hint || props.mode === 'Picture' || props.mode === 'Call & Picture') && <img src={props.img}/>} 
            {props.difficulty === 'Easy' ? 
                <section className="multipleChoice">
                {props.choices.map((element,i) => <button onClick={() => handleChoice(element)}>{element}</button>)}
                </section> :
                <form onSubmit={handleSubmit}>
                    <label>Answer:</label>
                    <input type="text" onChange={(e)=>setAnswer(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>}
            {wrong && <p className="response">{wrongText}</p>}
            {correct && <p className="response">Correct!</p>}
        </section>
    )
}