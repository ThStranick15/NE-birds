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
            console.log("Nice job!")
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
        
        console.log("That's not it.")
    }

    return(
        <section id="question">
            <p>{props.text}</p>
            <audio controls src={props.call}></audio>
            {props.hint && <img src={props.img}/>} 
            <form onSubmit={handleSubmit}>
                <label>Answer:</label>
                <input type="text" onChange={(e)=>setAnswer(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {wrong && <p>{wrongText}</p>}
            {correct && <p>Correct!</p>}
        </section>
    )
}