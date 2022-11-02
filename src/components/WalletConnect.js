import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/reducers/WalletActions";

function WalletConnect() {
  const dispatch = useDispatch();

  const walletConnect = () => {
    dispatch(connect());
  };

  const userAccount = useSelector(state => state.account);

  return (
    <div>
      <button onClick={walletConnect}>지갑연결</button>
      <br />
      <span>연결된 지갑주소: {userAccount} </span>
    </div>
  );
}

export default WalletConnect;
