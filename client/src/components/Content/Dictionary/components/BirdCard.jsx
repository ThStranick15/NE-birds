export default function BirdCard(props){
    return (
        <section className="birdCard">
            <img src={props.img} alt="Bird" />
            <section className="info">
                <h1>{props.name}</h1>
                <p>{props.text}</p>
                <audio controls src={props.call}></audio>
            </section>
            
        </section>
    )
}