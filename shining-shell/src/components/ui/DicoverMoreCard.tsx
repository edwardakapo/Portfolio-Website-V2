import React, { useState } from 'react';
// import '@/styles/cardhover.css'; // Create a CSS file for styling

// const cards = ['Card 1', 'Card 2', 'Card 3']; // Example card data

type Card = {
  img : string;
  title : string;
  color : string;
  url : string;
}
type CardData = {
    data : Card[]
}

const DiscoverMoreCard = ( {data} : CardData) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);


  return (
    <div className="card-container">
      {data.map((card, index) => (
        <div
        key={card.title}
        className={`card ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'non-hovered' : ''}`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
          <img className="card-img w-[150px] h-[150px]" src={card.img}/>
          <p className='text-xl font-bold tracking-wide'>{card.title}</p>
        </div>
      ))}
    </div>
  );
};

const DiscoverMoreCardMobile = () =>  {
    return (
        <>
        </>
    )
}


export {DiscoverMoreCard}