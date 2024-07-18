import { useState } from "react"

export default function Question(props){
    const [answer, setAnswer] = useState('')
    const [wrongAnswerCount, setWrongAnswerCount] = useState(0) //waits 3 wrong answers before showing the image

    function handleSubmit(e){
        e.preventDefault()
        if(props.name === answer){
            console.log("Nice job!")
            setWrongAnswerCount(0)
            setTimeout(()=>{ //wait 3 sec before going to next question
                props.nextQuestion()
            }, "3000")
            return
        }
        setWrongAnswerCount(wrongAnswerCount + 1)
        console.log("That's not it.")
    }

    return(
        <section id="question">
            <p>{props.text}</p>
            <audio controls src={props.call}></audio>
            {wrongAnswerCount > 2 && <img src={props.img}/>} 
            <form onSubmit={handleSubmit}>
                <label>Answer:</label>
                <input type="text" onChange={(e)=>setAnswer(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}