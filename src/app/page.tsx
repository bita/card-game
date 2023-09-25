"use client";
import GameBoard from "./components/Gameboard/GameBoard";
import { GENERAL } from "./components/Gameboard/fixtures";
import Title from "./components/Shared/Title";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen bg-transparent text-center text-xl lg:text-3xl py-8 px-3 md:px-8 lg:px-10">
      <Title title={GENERAL.GAME_TITLE} subTitle={GENERAL.GAME_SUB_TITLE} />
      <Title subTitle={GENERAL.GAME_RULE} />
      <GameBoard />
    </main>
  );
}
