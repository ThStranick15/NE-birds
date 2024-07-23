import { useStore } from "../../../../store"

export default function Search(props){
    const {state, setState} = useStore();

    function handleClick(i){
        setState((prevState) => ({...prevState,show: i}))
    }

    return (
        <section className="search">
            {props.bird.map((bird, i) => <h2 className={state.show === i && "active"} onClick={() => handleClick(i)}>{bird.name}</h2>)}
            <h3>More to come ...</h3>
        </section>
    )
}