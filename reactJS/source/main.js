import React from "react";
import ReactDOM from "react-dom";

var ChoiceButton = React.createClass({
    render: function () {
        var divStyle = {
            width: this.props.btnSize,
            height: this.props.btnSize,
            margin: 8,
            display: "inline-block"
        };

        var btnStyle = {
            width: "100%",
            height: "100%",
            backgroundColor: this.props.btnColor,
            borderColor: "transparent",
            color: "white",
            fontWeight: "bold",
            fontSize: "large"
        };

        return (
            <div style={divStyle}>
                <input type="button" value={this.props.btnValue} style={btnStyle} />
            </div>
        );
    }
});

var ButtonRow = React.createClass({
    render: function () {
        var divStyle = {
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
        };
        var btnSize = 160;
        return (
            <div style={divStyle}>
                <ChoiceButton btnSize={btnSize} btnColor="blue" btnValue="缴费" />
                <ChoiceButton btnSize={btnSize} btnColor="red" btnValue="查询" />
                <ChoiceButton btnSize={btnSize} btnColor="green" btnValue="社区活动" />
            </div>
        );
    }
});

var TextShown = React.createClass({
    render: function () {
        return (
            <div style={{ textAlign: "center", margin: this.props.textMargin }}>
                <span style={{ fontSize: this.props.textSize, fontWeight: "bold" }}>{this.props.textContent}</span>
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div style={{height: this.props.appHeight}}>
                <div className="frame-div" style={{ width: "20%", backgroundColor: "red" }}></div>
                <div className="frame-div" style={{ width: "60%", backgroundColor: "yellowgreen" }}>
                    <TextShown textContent="xxx小区管理系统" textSize="x-larger" textMargin="18px" />
                    <div style={{ marginTop: "180px" }}>
                        <ButtonRow />
                    </div>
                </div>
                <div className="frame-div" style={{ width: "20%", backgroundColor: "lightblue" }}></div>
            </div>
        );
    }
});

ReactDOM.render(
    <App appHeight="800px" />,
    document.getElementById("sample")
);
