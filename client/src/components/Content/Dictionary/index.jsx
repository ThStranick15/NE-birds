import BirdCard from "./components/BirdCard"
import Search from "./components/Search"
import {useMediaQuery} from 'react-responsive'
import { useStore } from "../../../store"
import { useEffect, useState } from "react"

export default function Dictionary(){
    const {state} = useStore();
    const [birds,setBirds] = useState([])
    const isMobile = useMediaQuery({query: '(max-width:786px)'})

    useEffect(()=>{
        const fetchBirds = async () => {
            try {
                const res = await fetch('/api/birds')
                const data = await res.json()
                setBirds(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBirds()
    },[])
    
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