import BirdCard from "./components/BirdCard"
import Search from "./components/Search"
import {useMediaQuery} from 'react-responsive'
import { useStore } from "../../../store"

const birds = [
    {
        name: "American Robin",
        img: "/Birds/Images/American-Robin.jpg",
        call: "/Birds/Calls/AMEROB_1.songnum1_NYle.mp3",
        text: "A common bird, easily identified by its orange-red chest and black-grey back. Medium sized and usually seen hopping around lawns. The song goes \"cheer-up cheerily cheer-up cheerily\""
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
        text: "A large beige-grey colored bird with darker wings, sometimes seen on the ground if eating. The mournful call sounds of \"coo-ah coo coo coo\"."
    },
    {
        name: "American Goldfinch",
        img: "/Birds/Images/American-Goldfinch.jpg",
        call:"/Birds/Calls/AMEGOL_1.songnum1_UTkc_1.mp3",
        text: "The state bird of New Jersey. A small bird with a bright yellow coat of feathers and black accents. The song is complex, this example with a starting chatter and high low chirps following."
    },
    {
        name: "House Finch",
        img: "/Birds/Images/House-Finch.jpg",
        call:"/Birds/Calls/HOUFIN_1.songnum1_NYle_1.mp3",
        text: "The male colored red around the head, and the female a browner variant. Their song is complex and warbling that often ends in an extended zeee."
    },
    {
        name: "Song Sparrow",
        img: "/Birds/Images/Song-Sparrow.jpg",
        call:"/Birds/Calls/SONSPA_1.songsnum1_NYle_1.mp3",
        text: "A smaller brown-grey bird that has brown streaks along its chest and head. It's song usually comprises of a few starting notes and then finishes with a trill."
    },
    {
        name: "Tufted Titmouse",
        img: "/Birds/Images/Tufted-Titmouse.jpg",
        call:"/Birds/Calls/TUFTIT_1.songsnum1_OHle_1.mp3",
        text: "Identified by it's crest, grey top, white bottom, and orange under-wing coloring. It's song sounds like \"Peter-Peter\" repeated."
    },
    {
        name: "White-breasted Nuthatch",
        img: "/Birds/Images/White-Breasted-Nuthatch.jpg",
        call:"/Birds/Calls/WHBRNU_1.songnum1_NYle_1.mp3",
        text: "A bit rounder of a bird, it has a white chest and belly, black top of head, and black and grey feathers. The call is a nasaly \"wha-wha-wha\" notes that follow each other."
    }
]

export default function Dictionary(){
    const {state} = useStore();
    const isMobile = useMediaQuery({query: '(max-width:786px)'})
    
    return(
        <section id="dictionary">
            <h1>Dictionary</h1>
            <section className="dict-content">
                <Search bird={birds}/>
                {birds.map((bird, i) => 
                    ((state.show === i) && <BirdCard key= {i} name={bird.name} img={bird.img} text={bird.text} call={bird.call}/>)
                )}
                {state.show === -1 && 
                <section className="placeholder"> 
                    {isMobile ? <p>Select a bird using the dropdown arrow above to view some information about them!</p> : <p>Select a bird using the list on the left to view some information about them!</p>}
                </section>}
            </section>
            
        </section>
        
    )
}