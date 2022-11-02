export const WALLET_CONNECT = "WALLET_CONNECT";
export const CONNECT_REFRESH = "CONNECT_REFRESH";

const walletConnect = payload => {
  return {
    type: WALLET_CONNECT,
    payload,
  };
};

const connectRefresh = payload => {
  return {
    type: CONNECT_REFRESH,
    payload,
  };
};

export const connect = () => async dispatch => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      dispatch(walletConnect({ account: accounts[0] }));
    } catch (error) {
      console.error(error);
    }
  }
};

export const getAddress = () => async dispatch => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        dispatch(connectRefresh({ account: addressArray[0] }));
      }
    } catch (error) {
      console.error(error);
    }
  }
};
