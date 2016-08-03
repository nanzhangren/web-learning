import React from "react";
import ReactDOM from "react-dom";

var MainPage = require("./main.js");
var PageFrame = MainPage.PageFrame;
var DivText = MainPage.DivText;


var MySelect = React.createClass({
    getInitialState: function () {
        return {
            costsItems: ["水费", "电费", "其他"]
        };
    },
    render: function () {
        var costsList = this.state.costsItems.map(function (item) {
            return (
                <option key={item} value={item}>{item}</option>
            );
        });
        return (
            <div>
                <select style={{ width: this.props.selectWidth, height: this.props.selectHeight }}>
                    {costsList}
                </select>
            </div>
        );
    }
});

var MyTextInput = React.createClass({
    render: function () {
        return (
            <div>
                <input type="text" placeholder={this.props.inputHintText} style={{ width: this.props.inputWidth, height: this.props.inputHeight}} />
            </div>
        );
    }
});

var MyNumberInput = React.createClass({
    render: function () {
        return (
            <div>
                <input type="number" min="0" placeholder={this.props.inputHintText} style={{ width: this.props.inputWidth, height: this.props.inputHeight}} />
            </div>
        );
    }
});

var PayPageContent = React.createClass({
    render: function () {
        var payElementWidth = 260, payElementHeight = 30;
        var btnWidth = 120;
        return (
            <div>
                <DivText textContent="xxx System" textSize="x-large" textMargin="60px" />
                <div id="payItems" style={{ textAlign: "center", marginTop: "130px", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <MySelect selectWidth={payElementWidth + 4} selectHeight={payElementHeight + 6} />
                    <MyNumberInput inputWidth={payElementWidth} inputHeight={payElementHeight} inputHintText="请输入房号" />
                    <MyTextInput inputWidth={payElementWidth} inputHeight={payElementHeight} inputHintText="请输入户主姓名" />
                    <MyNumberInput inputWidth={payElementWidth} inputHeight={payElementHeight} inputHintText="请输入金额" />
                    <div style={{ marginTop: "60px" }}>
                        <input type="button" value="确认" style={{ width: btnWidth, height: "30px", marginLeft: payElementWidth + 4 - btnWidth }} />
                    </div>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function () {
        ReactDOM.render(
            <PayPageContent />,
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
    MyNumberInput: MyNumberInput
};