import { SingleHistoryWrapper } from "../styles/HistoryEmotion";

const SingleHistory = ({ date, group, price }) => {
  return (
    <>
      <SingleHistoryWrapper>
        <div className="flex">
          <span className="date">{date}</span>
          <span>{group}</span>
        </div>
        <div className="bold">
          {price > 0 ? `+${price.toLocaleString()}` : price.toLocaleString()}원
        </div>
      </SingleHistoryWrapper>
    </>
  );
};

export default SingleHistory;
