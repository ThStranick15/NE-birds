import BirdCard from "./components/BirdCard"

const birds = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        text: "This is the American Robin"
    },
    {
        name: "Blue Jay",
        img: "/Birds/Images/Blue-Jay.jpg",
        text: "This is the Blue Jay"
    },
    {
        name: "Northern Cardinal",
        img: "/Birds/Images/Male-Northern-Cardinal.jpg",
        text: "This is the Northern Cardinal"
    },
    {
        name: "Mourning Dove",
        img: "/Birds/Images/Mourning-Dove.jpg",
        text: "This is the Mourning Dove"
    }
]

export default function Dictionary(){
    return(
        <section id="dictionary">
            <h1>Dictionary</h1>
            {birds.map((bird, i) => 
                (<BirdCard key= {i} name={bird.name} img={bird.img} text={bird.text}/>)
            )}
            
        </section>
        
    )
}