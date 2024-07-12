export default function BirdCard(props){
    return (
        <section className="birdCard">
            <img src={props.img} alt="Robin" />
            <section className="info">
                <h1>{props.name}</h1>
                <p>{props.text}</p>
            </section>
            
        </section>
    )
}