import { SingleHistoryWrapper } from "../styles/HistoryEmotion";

const SingleStockHistory = ({
  date,
  name,
  cnt,
  orderType,
  onClickStockHistory,
}) => {
  return (
    <>
      <SingleHistoryWrapper onClick={onClickStockHistory}>
        <div className="flex">
          <span className="date">
            {new Date(date).getMonth()}월 {new Date(date).getDate()}일
          </span>
          <span>{name}</span>
        </div>
        <div className="bold">
          {orderType === "BUY"
            ? `+${cnt.toLocaleString()}`
            : `-${cnt.toLocaleString()}`}
          주
        </div>
      </SingleHistoryWrapper>
    </>
  );
};

export default SingleStockHistory;
