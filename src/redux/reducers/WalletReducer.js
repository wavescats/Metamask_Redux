import { WALLET_CONNECT, CONNECT_REFRESH } from "./WalletActions";

const initialState = {
  account: "",
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case WALLET_CONNECT:
      return {
        account: action.payload.account,
      };

    case CONNECT_REFRESH:
      return {
        account: action.payload.account,
      };

    default:
      return state;
  }
};

export default WalletReducer;
