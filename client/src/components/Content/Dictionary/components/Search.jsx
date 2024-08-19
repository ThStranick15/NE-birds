import { useState } from "react";
import { useStore } from "../../../../store"
import {useMediaQuery} from 'react-responsive'

export default function Search(props){
    const {state, setState} = useStore();
    const [drop,setDrop] = useState(false)
    const isMobile = useMediaQuery({query: '(max-width:786px)'})

    function handleClick(i){
        setState((prevState) => ({...prevState,show: i}))
        setDrop(false)
    }

    function handleDrop(){
        setDrop(!drop)
    }

    return (
        <>
        {isMobile ? 
        <section className="mobileSearch">
            {drop ? <a onClick={handleDrop}>&#9660;</a> : <a onClick={handleDrop}>&#9650;</a>}
            {state.show === -1 && <h2 className="placeholderBird">Select A Bird</h2>}
            {drop ? 
            <section className="dropdown">
                {props.bird.map((bird, i) => <h2 className={state.show === i && "active"} onClick={() => handleClick(i)}>{bird.name}</h2>)}
            </section> : 
            <section className="selected">
                {props.bird.map((bird, i) => <h2 className={state.show === i && "active"} onClick={() => handleClick(i)}>{bird.name}</h2>)}
            </section>}
        </section> :  
        <section className="search">
            {props.bird.map((bird, i) => <h2 className={state.show === i && "active"} onClick={() => handleClick(i)}>{bird.name}</h2>)}
            <h3>More to come ...</h3>
        </section>}
        </>
        
    )
}