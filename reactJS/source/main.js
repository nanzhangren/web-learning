import React from "react";
import ReactDOM from "react-dom";

var ChoiceButton = React.createClass({
    render: function () {
        var divStyle = {
            width: this.props.btnSize,
            height: this.props.btnSize,
            margin: "8px 20px",
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
                <input type="button" value={this.props.btnValue} style={btnStyle} onClick={this.props.clickEvent} />
            </div>
        );
    }
});

var ButtonRow = React.createClass({
    switchToPay: function () {
        window.location.href = "./html/pay.html";
    },
    switchToInquire: function () {
        window.location.href = "./html/inquire.html";
    },
    render: function () {
        var divStyle = {
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px"
        };
        var btnSize = 160;
        return (
            <div style={divStyle}>
                <ChoiceButton btnSize={btnSize} btnColor="blue" btnValue="缴费" clickEvent={this.switchToPay} />
                <ChoiceButton btnSize={btnSize} btnColor="red" btnValue="查询" clickEvent={this.switchToInquire} />
                <ChoiceButton btnSize={btnSize} btnColor="green" btnValue="其他" />
            </div>
        );
    }
});

var MyText = React.createClass({
    render: function () {
        return (
            <span style={{ fontSize: this.props.textSize, fontWeight: this.props.textWeight }}>{this.props.textContent}</span>
        );
    }
});

var DivText = React.createClass({
    render: function () {
        return (
            <div style={{ textAlign: "center", margin: this.props.textMargin }}>
                <MyText textWeight="bold" textContent={this.props.textContent} textSize={this.props.textSize} textMargin={this.props.textMargin} />
            </div>
        );
    }
});

var MainPageContent = React.createClass({
    render: function () {
        return (
            <div>
                <DivText textContent="xxx System" textSize="x-large" textMargin="60px" />
                <div style={{ marginTop: "180px" }}>
                    <ButtonRow ref="myButton" />
                </div>
            </div>
        );
    }
});

var PageFrame = React.createClass({
    render: function () {
        return (
            <div style={{height: this.props.appHeight}}>
                <div className="frame-div" style={{ width: "20%" }} id="leftDiv"></div>
                <div className="frame-div" style={{ width: "60%" }} id="centerDiv"></div>
                <div className="frame-div" style={{ width: "20%" }} id="rightDiv"></div>
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function () {
        ReactDOM.render(
            <MainPageContent />,
            document.getElementById("centerDiv")
        );
    },
    render: function () {
        return (
            <div>
                <PageFrame appHeight="800px" />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById("sample")
);

module.exports = {
    PageFrame: PageFrame,
    DivText: DivText,
    MyText: MyText
}