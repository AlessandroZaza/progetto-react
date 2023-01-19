import React from 'react';
import { FilmCard } from './card' //importing the Card component

interface ICard {
    image:string;
    text:string;
}

export default function CardList({ data }: {data:ICard[]}) {
    return (
      <div className="card-list">
        {data.map((item:ICard) => (
          <FilmCard image={item.image} text={item.text}  />
        ))}
      </div>
    );
  }
  
  
