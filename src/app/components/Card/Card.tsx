import { SingleCardTemplate } from "@/app/types/singleCardTemplate.type";
import Image from "next/image";
import { CARD_STATE } from "../Gameboard/fixtures";

const Card: React.FC<SingleCardTemplate> = ({ disabled, card, onClick }) => {
  const clickHandler = () => {
    if (!disabled || card.cardState === CARD_STATE.MATCHED) {
      onClick();
    }
  };

  let flipped = false;
  if (
    card.cardState === CARD_STATE.MATCHED ||
    card.cardState === CARD_STATE.FLIPPED
  ) {
    flipped = true;
  }

  return (
    <div
      data-cy="single-card"
      onClick={clickHandler}
      className={`${
        flipped
          ? " border border-violet-500 border-opacity-40 pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300] "
          : ""
      }relative border border-pink-500 border-opacity-70 rounded-lg transform transition ease-in-out [transform-style:preserve-3d]`}
    >
      <Image
        data-cy="back"
        className="rounded-lg transition-opacity opacity-0 duration-[1s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        src="/images/0.jpg"
        alt="back"
        height={400}
        width={400}
      />
      <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <Image
          className="rounded-lg"
          data-cy="front"
          src={card.url}
          alt={card.alt || "front"}
          fill
          sizes="90vw"
        />
      </div>
    </div>
  );
};
export default Card;
