import { SingleHistoryWrapper } from "../styles/HistoryEmotion";

const SingleStockHistory = ({ date, name, cnt, onClickStockHistory }) => {
  return (
    <>
      <SingleHistoryWrapper onClick={onClickStockHistory}>
        <div className="flex">
          <span className="date">{date}</span>
          <span>{name}</span>
        </div>
        <div className="bold">
          {cnt > 0 ? `+${cnt.toLocaleString()}` : `${cnt.toLocaleString()}`}주
        </div>
      </SingleHistoryWrapper>
    </>
  );
};

export default SingleStockHistory;
