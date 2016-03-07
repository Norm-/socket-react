import React from "react";
import Icon from "react-fa";

function FA(props) {
  const { status } = props;
  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}} >
        <Icon name="camera-retro" size="4x" />
        <Icon name="beer" size="4x" />
        <Icon name="umbrella" size="4x" />
        <Icon style={{color: "red"}} name="volume-down" size="4x" />
        <Icon style={{color: "green"}} name="volume-up" size="4x" />
        <Icon name="volume-off" size="2x" />
        <Icon name="hand-grab-o" size="3x" />
        <Icon name="hand-lizard-o" />
        <Icon style={{color: "blue", border: "2px solid blue"}} name="car" size="3x" />
        <Icon style={{alignSelf: "baseline", border: "2px solid red"}} name="truck" size="2x" />
        <Icon style={{alignSelf: "center", border: "2px solid red"}} name="rocket" />
        <Icon style={{color: "magenta"}} name="file-text" size="3x" />
        <Icon name="plus-square" size="3x" />
        <Icon name="cc-amex" size="3x" />
        <Icon name="cc-paypal" size="3x" />
        <Icon name="cc-mastercard" size="3x" />
        <Icon name="cc-visa" size="3x" />
        {status}
      </div>
      <div>
        <Icon spin name="spinner" size="3x"/>
        <Icon spin name="circle-o-notch" size="3x"/>
        <Icon spin name="cog" size="3x"/>
        <Icon spin name="refresh" size="3x"/>
      </div>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
        <Icon name="eur" size="3x" />
        <Icon name="sheqel" size="3x" />
        <Icon name="money" size="3x" />
        <Icon name="try" size="3x" />
        <Icon name="usd" size="3x" />
        <Icon name="yen" size="3x" />
        <Icon name="gbp" size="3x" />
        <Icon name="gg" size="3x" />
      </div>
      <hr/>
    </div>
  );
}

export default FA;
