import React, { useState } from "react";
import "./sale.css";
import liquidityAutolock from "./icons/Iconly-Broken-Lock.png";
import saleProgress from "./icons/chart-line.png";
import equalSign from "./icons/Group 3.png";
import exchange from "./icons/currency_exchange.png";
import amountRaised from "./icons/sales_performance.png";
import swapRatio from "./icons/Iconly-Bold-Swap.png";
import exchangeArrows from "./icons/Group 2.png";
import vestingSchedule from "./icons/todo_list.png";
import exchangeAmount from "./icons/Iconly-Bulk-Arrow---Down-2.png";
import PurchaseBTN from "./icons/Iconly-Broken-Wallet.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../Header/Header";

function Sale() {
  const [saleName, setSaleName] = useState("Sale Name");
  const [saleID, setSaleID] = useState("84186128");
  const [timer, setTimer] = useState("12d : 15h : 36m : 29s");
  const [cerclePercentage, setCerclePercentage] = useState(50);
  const [barPercentage, setBarPercentage] = useState(50);
  const [amountRaisedValue, setAmountRaisedValue] = useState("X");
  const [lockupPeriodDays, setLockupPeriodDays] = useState("X")
  const [lockupPeriodDaysonNo, setLockupPeriodDaysonNo] = useState("X")
  const [minBNBperWallet, setMinBNBperWallet] = useState(0.1)
  const [maxBNBperWallet, setMaxBNBperWallet] = useState(15)
  const [exchangeVar, setExchangeVar] = useState("SMG")
  const [bnbINtoken, setBnbINtoken] = useState("X")
  const [tokenINbusd, setTokenINbusd] = useState("X")
  const [vestingScheduleMonths, setVestingScheduleMonths] = useState("X")
  const [vestingScheduleRateTop, setVestingScheduleRateTop] = useState("10")
  const [vestingScheduleRateBottom, setVestingScheduleRateBottom] = useState("50")
  return (
    <div>
      <Header/>
    <div className="sale">
      <div className="sale_top">
        <div className="sale_top_left">
          <h2>
            <span class="dot"></span>
            {"  " + saleName}
          </h2>
          <h3> {`sale ID : ${saleID}`} </h3>
        </div>
        <div className="sale_top_middle">
          <button>contact address</button>
        </div>
        <div className="sale_top_right">
          <h2>Sale ends in:</h2>
          <h4> {timer} </h4>
        </div>
      </div>
      <div className="sale_main">
        <div className="liquidity_Autolock">
          <div className="white_square">
            <img src={liquidityAutolock} alt="" />
            <strong>liquidity Autolock</strong>
          </div>
          <div className="liquidity_Autolock_child">
            <div className="progressCercle_container">
              <CircularProgressbar
                styles={buildStyles({
                  strokeLinecap: "butt",
                  textSize: "24px",
                  pathColor: "#00b7c5",
                  textColor: "#00b7c5",
                  trailColor: "#E1E1E1",
                })}
                value={cerclePercentage}
                text={`${cerclePercentage}%`}
              />
            </div>
            <div className="lockupPeriod_info">
              <span>Lockup priod : </span>
              <br />
              <span> {lockupPeriodDays+ "days /" +lockupPeriodDaysonNo+" of days"} </span>
            </div>
          </div>
        </div>
        <div className="Sale_progress">
          <div className="white_square">
            <img src={saleProgress} alt="" />
            <strong>Sale progress</strong>
          </div>
          <div className="progressBar_container">
              <span> {barPercentage+"%"} </span>
            <progress value={barPercentage} max="100">
            </progress>
          </div>
        </div>
        <div className="Exchange">
          <div className="white_square">
            <img src={exchange} alt="" />
            <strong>Exchange</strong>
          </div>
          <div className="Exchange_info">
            <span>{"Min "+minBNBperWallet+" BNB - Max "+maxBNBperWallet+" BNB per wallet"}</span>
          </div>
          <div className="Exchange_info_secondairy">
            <div className="exchange_amount">
              <h6> {"BNB Amount"} </h6>
              <div className="exchange_currency">
                <h5> {"BNB"} </h5>
                <img src={exchangeAmount} alt="" />
              </div>
            </div>
            <img id="exchangeArrows" src={exchangeArrows} alt="" />
            <div className="exchange_amount">
              <h6> {exchangeVar+" Amount"} </h6>
              <div className="exchange_currency">
                <h5> {exchangeVar} </h5>
                <img src={exchangeAmount} alt="" />
              </div>
            </div>
          </div>
          <div className="Purchase_btn">
            <button>
              <img src={PurchaseBTN} alt="" />
              Purchase
            </button>
          </div>
        </div>
        <div className="Amount_raised">
          <div className="white_square">
            <img src={amountRaised} alt="" />
            <strong>Amount raised</strong>
          </div>
          <div className="Amount_raised_details">
            <span> {amountRaisedValue + " B N B"} </span>
          </div>
        </div>
        <div className="Swap_ratio">
          <div className="white_square">
            <img src={swapRatio} alt="" />
            <strong>Swap ratio</strong>
          </div>
          <div className="Swap_ratio_info">
            <div className="Swap_ratio_info_child">
              <span>1 BNB </span>
              <img src={equalSign} alt="" />
              <span> {bnbINtoken + " Tokens"} </span>
            </div>
            <div className="Swap_ratio_info_child">
              <span>1 Token </span>
              <img src={equalSign} alt="" />
              <span> {tokenINbusd + " BUSD"} </span>
            </div>
          </div>
        </div>
        <div className="Vesting_schedule">
          <div className="white_square">
            <img src={vestingSchedule} alt="" />
            <strong>Vesting schedule</strong>
          </div>
          <div className="Vesting_schedule_info">
            <div className="Vesting_schedule_equation">
              <div>
                <span> At TGE </span>
                <img src={exchangeAmount} alt="" />
              </div>
              <span>{vestingScheduleRateTop}%</span>
            </div>
            <div className="Vesting_schedule_equation">
              <div className=" bottom_equation">
                <span> {"Every  Days for "+vestingScheduleMonths+" months"} </span>
                <img src={exchangeAmount} alt="" />
              </div>
              <span className=" bottom_equation">{vestingScheduleRateBottom}%</span>
            </div>
            <div className="Pancakeswap">
              <span id="pancakeswapListing">Pancakeswap listing price</span>
              <div className="Swap_ratio_info_child">
                <span>1 Token </span>
                <img src={equalSign} alt="" />
                <span> {tokenINbusd + " BUSD"} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Sale;
