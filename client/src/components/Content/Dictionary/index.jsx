import BirdCard from "./components/BirdCard"
import Search from "./components/Search"
import { useStore } from "../../../store"

const birds = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        call: "/Birds/Calls/AMEROB_1.songnum1_NYle.mp3",
        text: "A common bird, easily identified by its orange-red chest and back-grey back. Medium sized and usually seen hopping around lawns. The song goes \"cheer-up cheerily cheer-up cheerily\""
    },
    {
        name: "Blue Jay",
        img: "/Birds/Images/Blue-Jay.jpg",
        call:"/Birds/Calls/BLUJAY_1.jaycallsampclicks_FLle_1.mp3",
        text: "A striking blue color with a crest and white patterned wings. Other blue birds (Bluebird, buntings) are much smaller, the Blue Jay being larger. Jay calls are harsh cries most commonly heard."
    },
    {
        name: "Northern Cardinal",
        img: "/Birds/Images/Male-Northern-Cardinal.jpg",
        call:"/Birds/Calls/NORCAR_1.songsnum1_NYle_1.mp3",
        text: "The male, easy to spot, is a bright red color with a crest and large pink beak. The female is a duller beige-brown but shares the crest and beak. The common call usually a few longer sounds followed by a few shorter sounds."
    },
    {
        name: "Mourning Dove",
        img: "/Birds/Images/Mourning-Dove.jpg",
        call:"/Birds/Calls/MOUDOV_1.cooamppartialcoo_NYle_1.mp3",
        text: "A planier beige-grey color with darker wings. A larger bird that is normally seen on the ground if eating. The mournful call sounds of \"coo-ah coo coo coo\"."
    }
]

export default function Dictionary(){
    const {state} = useStore();

    return(
        <section id="dictionary">
            <h1>Dictionary</h1>
            <section className="dict-content">
                <Search bird={birds}/>
                {birds.map((bird, i) => 
                    ((state.show === i) && <BirdCard key= {i} name={bird.name} img={bird.img} text={bird.text} call={bird.call}/>)
                )}
            </section>
            
            
        </section>
        
    )
}