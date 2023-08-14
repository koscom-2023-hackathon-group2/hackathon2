import { SinglePriceWrapper } from "../styles/PriceEmotion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SinglePrice = ({ name, price, percent, onClickStock }) => {
  return (
    <>
      <SinglePriceWrapper onClick={onClickStock}>
        <div className="ellipsis">{name}</div>
        <div className="stock-info-right">
          <div>{price.toLocaleString()}</div>
          <div className="stock-percent">
            {percent < 0 ? (
              <>
                <ArrowDropDownIcon className="minus" />
                <span className="minus">{-1 * percent}%</span>
              </>
            ) : percent === 0 ? (
              <>
                <div className="zero">0</div>
              </>
            ) : (
              <>
                <ArrowDropUpIcon className="plus" />
                <span className="plus">{percent}%</span>
              </>
            )}
          </div>
        </div>
      </SinglePriceWrapper>
    </>
  );
};

export default SinglePrice;
