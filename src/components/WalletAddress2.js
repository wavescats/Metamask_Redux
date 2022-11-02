import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../redux/reducers/WalletActions";

function WalletAddress2() {
  const dispatch = useDispatch();
  const userAccount = useSelector(state => state.account);

  useEffect(() => {
    if (userAccount !== null) {
      dispatch(getAddress());
    }
  }, [userAccount]);

  return (
    <div>
      <div>지갑주소 : {userAccount}</div>
    </div>
  );
}
export default WalletAddress2;
