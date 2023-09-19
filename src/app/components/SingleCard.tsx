import Image from "next/image";
import { SingleCardTemplate } from "../types/singleCardTemplate.type";

const SingleCard: React.FC<SingleCardTemplate> = ({
  disabled,
  card,
  onCardClick,
  flipped,
}) => {
  const clickHandler = () => {
    if (!disabled) {
      onCardClick(card);
    }
  };

  return (
    <div
      data-cy="single-card"
      onClick={clickHandler}
      className={`${
        flipped ? " border border-violet-500 border-opacity-40 pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300] " : ""
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
        <Image className="rounded-lg" data-cy="front" src={card.src} alt="front" fill sizes="90vw" />
      </div>
    </div>
  );
};
export default SingleCard;
