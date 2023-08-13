import { SinglePriceWrapper } from "../styles/PriceEmotion";

const SingleMember = ({ name, accNum }) => {
  return (
    <>
      <SinglePriceWrapper>
        <div className="bold">{name}</div>
        <div>{accNum}</div>
      </SinglePriceWrapper>
    </>
  );
};

export default SingleMember;
