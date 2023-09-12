"use client";
import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import { ImageCardType } from "./types/imageCard.type";
import { useAppSelector } from "@/redux/store";
import Header from "./components/Header";

let allCards: { src: string }[] = [
  { src: "/images/1.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/4.jpg" },
  { src: "/images/5.jpg" },
  { src: "/images/6.jpg" },
  { src: "/images/7.jpg" },
  { src: "/images/8.jpg" },
  { src: "/images/9.jpg" },
  { src: "/images/10.jpg" },
  { src: "/images/11.jpg" },
  { src: "/images/12.jpg" },
  { src: "/images/13.jpg" },
  { src: "/images/14.jpg" },
  { src: "/images/15.jpg" },
  { src: "/images/16.jpg" },
  { src: "/images/17.jpg" },
  { src: "/images/18.jpg" },
  { src: "/images/19.jpg" },
  { src: "/images/20.jpg" },
  { src: "/images/21.jpg" },
  { src: "/images/22.jpg" },
  { src: "/images/23.jpg" },
  { src: "/images/24.jpg" },
  { src: "/images/25.jpg" },
  { src: "/images/26.jpg" },
  { src: "/images/27.jpg" },
  { src: "/images/28.jpg" },
  { src: "/images/29.jpg" },
  { src: "/images/30.jpg" },
  { src: "/images/31.jpg" },
  { src: "/images/32.jpg" },
];

export default function Home() {
  const [cards, setCards] = useState<ImageCardType[]>([]);
  const [moves, setMoves] = useState(0);
  const diffLevel = useAppSelector(
    (state) => state.levelReducer.value.dificultyValue
  );

  useEffect(() => {
    shuffleCards(diffLevel);
  }, [diffLevel]);

  const shuffleCards = (level: number = 4) => {
    const initCards = allCards.slice(0, (level * level) / 2);
    const shuffledCards = [...initCards, ...initCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
    setMoves(0);
  };

  const itsAMove = () => {
    setMoves((move) => move + 1);
  };

  return (
    <main className="container mx-auto text-center text-xl lg:text-3xl p-10">
      <Header moves={moves} shuffleCards={shuffleCards} />
      <CardsList moved={itsAMove} cardsList={cards} />
    </main>
  );
}
