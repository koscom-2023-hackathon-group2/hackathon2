import styled from "styled-components";
import { COLORS } from "../assets/colors";
import { FONTS } from "../assets/fonts";

export const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .MuiButtonBase-root {
    font-family: ${FONTS.NotoSansKR};
  }

  .MuiBox-root {
    padding: 0;
  }
`;

export const AssetTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 20px;
  padding-bottom: 2rem;
  font-family: ${FONTS.NotoSansKR};

  .account-num {
    font-size: 1rem;
    color: ${COLORS.gray100};
    text-decoration: underline;
  }

  .group-name {
    padding: 0.5rem 0;
  }

  .asset-title-sub-box {
    justify-content: space-between;
  }

  .invite-btn {
    font-size: 1rem;
    background-color: ${COLORS.mainBlue};
    padding: 5px 10px;
    color: ${COLORS.white};
    border-radius: 10px;
    cursor: pointer;

    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 5px 10px rgba(33, 33, 33, 0.3);
    }
  }
`;

export const AssetGraphContainer = styled.div`
  width: 250px;
`;

export const StockAssetContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1.5rem;
`;
