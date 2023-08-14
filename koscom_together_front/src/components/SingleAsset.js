import { SinglePriceWrapper } from "../styles/PriceEmotion";

const SingleAsset = ({ name, cnt, percent, onClickStock }) => {
  return (
    <>
      <SinglePriceWrapper onClick={onClickStock}>
        <div>{name}</div>
        <div className="bold">{cnt}주</div>
      </SinglePriceWrapper>
    </>
  );
};

export default SingleAsset;
