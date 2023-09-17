"use client";
import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import { ImageCardType } from "./types/imageCard.type";
import { useAppSelector } from "@/redux/store";
import Header from "./components/Header";
import shuffleCards from "./cards/shuffel-cards";
import { useDispatch } from "react-redux";
import { changeDifficulty } from "@/redux/slices/level-slice";

export default function Home() {
  const dispatche = useDispatch();
  const [cards, setCards] = useState<ImageCardType[]>([]);
  const [moves, setMoves] = useState(0);
  const diffLevel = useAppSelector(
    (state) => state.levelReducer.value.dificultyValue
  );

  useEffect(() => {
    startGame(diffLevel);
  }, [diffLevel]);

  const startGame = (level: number = 4) => {
    dispatche(changeDifficulty(+level));
    const list = shuffleCards(level);
    setCards(list);
    setMoves(0);
  };

  const itsAMove = () => {
    setMoves((move) => move + 1);
  };
  return (
    <main className="container mx-auto text-center text-xl lg:text-3xl p-10">
      <Header moves={moves} shuffleCards={startGame} />
      {cards.length > 0 && <CardsList moved={itsAMove} cardsList={cards} resetGame={startGame}/>}
    </main>
  );
}
