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
        flipped ? "pointer-events-none [transform:rotateY(180deg)] duration-1000 delay-[300] " : ""
      }relative transform transition ease-in-out [transform-style:preserve-3d]`}
    >
      <Image
        data-cy="back"
        className="transition-opacity opacity-0 duration-[1s]"
        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        src="/images/0.jpg"
        alt="back"
        height={400}
        width={400}
      />
      <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <Image data-cy="front" src={card.src} alt="front" fill sizes="90vw" />
      </div>
    </div>
  );
};
export default SingleCard;
