import { useStore } from "../../../../store"

export default function Search(props){
    const {setState} = useStore();

    function handleClick(i){
        setState((prevState) => ({...prevState,show: i}))
    }

    return (
        <section className="search">
            {props.bird.map((bird, i) => <h2 onClick={() => handleClick(i)}>{bird.name}</h2>)}
        </section>
    )
}