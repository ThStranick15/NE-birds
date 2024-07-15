export default function Search(props){
    return (
        <section className="search">
            {props.bird.map((bird, i) => <h2>{bird.name}</h2>)}
        </section>
    )
}