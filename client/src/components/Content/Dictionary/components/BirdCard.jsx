export default function BirdCard(props){
    return (
        <section className="birdCard">
            <img src={props.img} alt="Bird" />
            <section className="birdInfo">
                <section>
                    <h1>{props.name}</h1>
                    <p className="description">{props.text}</p>
                    <div></div>
                    <audio controls src={props.call}></audio>
                </section>
                
                <p className="credit">Audio sourced from National Audubon Society. Image sourced from Cornell Lab.</p>
            </section>
            
        </section>
    )
}