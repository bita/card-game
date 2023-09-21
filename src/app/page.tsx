"use client";
import GameBoard from "./components/Gameboard/GameBoard";
import Title from "./components/Title/Title";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen bg-transparent text-center text-xl lg:text-3xl py-8 px-3 md:px-8 lg:px-10">
      <Title title="Pair Player" subTitle="The Memory Match Quest"/>
      <GameBoard />
    </main>
  );
}
