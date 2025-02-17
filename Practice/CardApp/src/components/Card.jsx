import { CardList } from "./CardList"
import CardData from './CardData.json'
import { CardForm } from "./CardForm"
import { useState } from "react"
import { setLocalStorageCards, getLocalStorageCards } from "./CardLocalStorage"


export const Card = () => {

    const [cards, setCards] = useState(() => getLocalStorageCards());

    const handleFormSubmit = (newCard) => {
        setCards([...cards, newCard]);
        // if(!url) return
        // if(!heading) return
        // if(!description) return

        // setCards((prevCards)=> [...prevCards, {url, heading, description}]);
    }

    const handleDeleteCard = (value) => {
        setCards(cards.filter((card) => card.heading !== value))
    }

    setLocalStorageCards(cards);

    return (
        <>
            <div>
                <CardForm onCreate={handleFormSubmit} />
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
                {
                    cards.map((card, index) => {
                        return (
                            <CardList
                                key={index}
                                image={card.image}
                                heading={card.heading}
                                description={card.description}
                                onHandleDeleteCard={handleDeleteCard}

                            />
                        )
                    })
                }
            </div>
        </>
    )
}