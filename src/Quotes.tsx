import { useEffect, useState } from "react";

interface CardDataProps{
    quote: string;
    image: string;
    character: string;
}

const Card = ({quote,image, character}:CardDataProps) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const onClick = () => {
        setIsRevealed(!isRevealed);
    }
    return <div className="card-container" onClick={onClick}>
        {isRevealed? <CardRevealed image={image} character={character}/>: <h2>{quote}</h2>}
    </div>
}


const CardRevealed = ({image, character}: Pick<CardDataProps, 'image' | 'character'>)=> {
return (
    <div>
        <figure>
        <img src={image} width={'100px'} height={'100px'}/>
        <figcaption>{character}</figcaption>
        </figure>
    </div>
)
}

const Quotes = () => {
    const [cardData, setCardData] = useState<CardDataProps>({quote: 'dummy', image:'dummy', character:'dummy'})
    const [isError, setIsError] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const getCardData = async () => {
        try{
            setIsPending(true)
       const result = (await fetch('https://thesimpsonsquoteapi.glitch.me/quotes'));
       const data: CardDataProps[] = await result.json();
       console.log(data)
       setIsPending(false);
       setCardData(data[0]); 
        }catch(e) {
            setIsError(true)
        }
    }
         useEffect(() => {
        getCardData();
            }, [])

            const {quote, character, image} = cardData ;
            
    return (<div className="quote-container">
            <h1>Simpson's quote</h1>
            { <Card quote={quote} image={image} character={character}/>}
        </div>)
}

export default Quotes;