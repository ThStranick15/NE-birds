import BirdCard from "./components/BirdCard"
import Search from "./components/Search"

const birds = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        call: "/Birds/Calls/AMEROB_1.songnum1_NYle.mp3",
        text: "This is the American Robin"
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

export default function Dictionary(){
    return(
        <section id="dictionary">
            <h1>Dictionary</h1>
            <section className="info">
                <Search bird={birds}/>
                {birds.map((bird, i) => 
                    (<BirdCard key= {i} name={bird.name} img={bird.img} text={bird.text} call={bird.call}/>)
                )}
            </section>
            
            
        </section>
        
    )
}