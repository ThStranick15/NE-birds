import { useState } from "react"

export default function Question(props){
    const [answer, setAnswer] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        if(props.name === answer){
            console.log("Nice job!")
            return
        }
        console.log("That's not it.")
    }

    return(
        <section id="question">
            <p>{props.text}</p>
            <img src={props.img} alt="Img" />
            <audio controls src={props.call}></audio>
            <form onSubmit={handleSubmit}>
                <label>Answer:</label>
                <input type="text" onChange={(e)=>setAnswer(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}