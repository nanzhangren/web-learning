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
                <ChoiceButton btnSize={btnSize} btnColor="blue" btnValue="Pay" clickEvent={this.switchToPay} />
                <ChoiceButton btnSize={btnSize} btnColor="red" btnValue="Inquire" clickEvent={this.switchToInquire} />
                <ChoiceButton btnSize={btnSize} btnColor="green" btnValue="Other" />
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

var MainPageContent = React.createClass({
    render: function () {
        return (
            <div>
                <TextShown textContent="xxx System" textSize="x-large" textMargin="60px" />
                <div style={{ marginTop: "180px" }}>
                    <ButtonRow />
                </div>
            </div>
        );
    }
});

var PageFrame = React.createClass({
    render: function () {
        return (
            <div style={{height: this.props.appHeight}}>
                <div className="frame-div" style={{ width: "20%" }}></div>
                <div className="frame-div" style={{ width: "60%" }} id="centerDiv"></div>
                <div className="frame-div" style={{ width: "20%" }}></div>
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
    TextShown: TextShown
}