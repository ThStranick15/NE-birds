import ActionCardLeft from "./components/ActionCardLeft"
import ActionCardRight from "./components/ActionCardRight"

export default function Hero(){
    return(
        <section id="hero">
            <h1>This site is about birds of the Northeast! You can checkout the list of common birds and test yourself on identification.</h1>
            <section id="cards">
                <ActionCardLeft/>
                <ActionCardRight/>
            </section>
            
        </section>
        
    )
}