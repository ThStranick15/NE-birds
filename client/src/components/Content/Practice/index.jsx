import Question from "./components/Question"
import { useStore } from "../../../store";

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
        text: "This is the Blue Jay"
    },
    {
        name: "Northern Cardinal",
        img: "/Birds/Images/Male-Northern-Cardinal.jpg",
        call:"/Birds/Calls/NORCAR_1.songsnum1_NYle_1.mp3",
        text: "This is the Northern Cardinal"
    },
    {
        name: "Mourning Dove",
        img: "/Birds/Images/Mourning-Dove.jpg",
        call:"/Birds/Calls/MOUDOV_1.cooamppartialcoo_NYle_1.mp3",
        text: "This is the Mourning Dove"
    }
]

export default function Practice(){
    const {state} = useStore();

    
    return(
        <section id="practice">
            <h1>Practice</h1>
            <h2>Question #</h2>
            <Question name={questions[state.question].name} text={questions[state.question].text} img={questions[state.question].img} call={questions[state.question].call}/>
        </section>
        
    )
}