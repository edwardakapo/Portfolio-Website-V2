import { useState } from 'react';


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
    <div className=" w-[600px] flex justify-between">
      {data.map((card, index) => (
        <a
        key={card.title}
        className={`card ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'non-hovered' : ''}`}
        href={card.url}
        target='_blank'
        onMouseEnter={() => {
          setHoveredIndex(index)
        }}
        onMouseLeave={() => {
          setHoveredIndex(null)
        }}
      >
          <img className="card-img w-[140px] h-[140px]" src={card.img}/>
          <p className='text-xl font-bold tracking-wide'>{card.title}</p>
        </a>
      ))}
    </div>
  );
};

const DiscoverMoreCardMobile = ({data} : CardData) =>  {
  return (
    <div className=" w-fit flex flex-col gap-y-10">
      {data.map((card) => (
        <a
        className='border-2 border-zinc-200 w-[240px] h-[220px] flex flex-col items-center justify-center gap-y-6 rounded-3xl bg-[#f0f0f0]'
        key={card.title}
        href={card.url}
        target='_blank'
        rel="noopener noreferrer"
      >
          <img className="card-img w-[140px] h-[140px]" src={card.img}/>
          <p className='text-xl font-bold tracking-wide'>{card.title}</p>
        </a>
      ))}
    </div>
  );
}


export {DiscoverMoreCard,DiscoverMoreCardMobile}