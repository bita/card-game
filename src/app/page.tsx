import CardsList from "./components/CardsList";

let initCards: {src: string}[] = [
  { src: "/images/1.jpg" },
  { src: "/images/2.jpg" },
  { src: "/images/3.jpg" },
  { src: "/images/4.jpg" },
  { src: "/images/5.jpg" },
  { src: "/images/6.jpg" },
  { src: "/images/7.jpg" },
  { src: "/images/8.jpg" },
];

export default function Home() {
  return (
    <main className="container mx-auto text-center text-3xl p-10">
      <p className="pb-4">Match game!</p>
      <CardsList cardsList={initCards} />
    </main>
  );
}
