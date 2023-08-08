import { SinglePriceWrapper } from "../styles/PriceEmotion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SinglePrice = ({ name, price, percent }) => {
  return (
    <>
      <SinglePriceWrapper>
        <div>{name}</div>
        <div className="stock-info-right">
          <div>{price.toLocaleString()}</div>
          <div className="stock-percent">
            {percent < 0 ? (
              <>
                <ArrowDropDownIcon className="minus" />
                <span className="minus">{-1 * percent}%</span>
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
