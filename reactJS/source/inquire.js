import React from "react";
import ReactDOM from "react-dom";

var MainPage = require("./main.js");
var PageFrame = MainPage.PageFrame;
var DivText = MainPage.DivText;
var MyText = MainPage.MyText;

var PayPage = require("./pay.js");
var MyNumberInput = PayPage.MyNumberInput;


var InquireLeftPageContent = React.createClass({
    getInitialState: function () {
        return {
            costsItems: ["水费", "电费", "其他"],
            showInquireDiv: false
        };
    },
    changeInquireDivState: function () {
        this.setState({
            showInquireDiv: true
        });
    },
    render: function () {
        var self = this;
        var colorList = ["green", "blue", "red"];
        var costsList = self.state.costsItems.map(function (item, index) {
            return (
                <li onClick={self.changeInquireDivState.bind(self)} key={item} style={{
                    display: "block",
                    height: "45px",
                    lineHeight: "2em",
                    fontSize: "larger",
                    fontWeight: "600",
                    fontFamily: "宋体",
                    color: colorList[index % 3]
                }}>{item}</li>
            );
        });
        return (
            <div>
                <MyInquireDiv initialDivState={self.state.showInquireDiv} />
                <ul id="costsListUl" style={{ marginTop: "200px" }}>
                    {costsList}
                </ul>
            </div>
        );
    }
});

var MyTextTd = React.createClass({
    render: function () {
        return (
            <th>
                <MyText textContent={this.props.tdContent} />
            </th>
        );
    }
});

var MyChoiceDateSelect = React.createClass({
    getInitialState: function () {
        return {
            costsItems: ["天", "周", "月", "年"]
        };
    },
    render: function () {
        var costsList = this.state.costsItems.map(function (item) {
            return (
                <option key={item} value={item} style={{ fontWeight: "bolder" }}>{item}</option>
            );
        });
        return (
            <select style={{ width: this.props.selectWidth, height: this.props.selectHeight, marginLeft: "5px", fontWeight: "bolder" }}>
                {costsList}
            </select>
        );
    }
});

var MyChoiceDateTd = React.createClass({
    render: function () {
        return (
            <th>
                <MyText textContent={this.props.tdContent} />
                <MyChoiceDateSelect selectWidth="38px" selectHeight="20px" />
            </th>
        );
    }
});

var MyTr = React.createClass({
    render: function () {
        var tdList = this.props.userTdData.map(function(item) {
            return (
                <td key={item}>{item}</td>
            );
        });
        return (
            <tr>
                {tdList}
            </tr>
        );
    }
});

var MyTbody = React.createClass({
    getInitialState: function () {
        return {
            userData: [
                ["2016/03/09", 123, 120, "/"],
                ["2016/03/10", 125, 12, "/"],
                ["2016/03/11", 121, 125, 100],
                ["2016/03/12", 654, 112, 200],
                ["2016/03/13", 554, 455, "/"],
                ["2016/03/14", 312, 458, 10]
            ]
        };
    },
    render: function () {
        var trList = this.state.userData.map(function(item, index) {
            return (
                <MyTr key={"MyTr" + index} userTdData={item} />
            );
        });
        return (
            <tbody style={{ textAlign: "center" }}>
                {trList}
            </tbody>
        );
    }
});

var InquireInfoContent = React.createClass({
    render: function () {
        var tableStyle = {
            tableLayout: "fixed",
            width: "100%",
            marginTop: "20px",
            border: "solid 2px lightgrey"
        };

        return (
            <table id="dataTable" style={tableStyle}>
                <thead>
                    <tr>
                        <MyTextTd tdContent="日期" />
                        <MyTextTd tdContent="剩余量" />
                        <MyChoiceDateTd tdContent="使用量" />
                        <MyTextTd tdContent="缴费金额（元）" />
                    </tr>
                </thead>
                <MyTbody />
            </table>
        );
    }
});

var InquireCenterPageContent = React.createClass({
    render: function () {
        return (
            <div>
                <DivText textContent="xxx System" textSize="x-large" textMargin="60px" />
                <div>
                    <MyText textContent="户主：" textSize="large" textWeight="bold" />
                    <MyText textContent="xxx" textSize="large" textWeight="lighter" />
                </div>
                <InquireInfoContent />
            </div>
        );
    }
});

var App = React.createClass({
    componentDidMount: function () {
        ReactDOM.render(
            <InquireCenterPageContent />,
            document.getElementById("centerDiv")
        );
        ReactDOM.render(
            <InquireLeftPageContent />,
            document.getElementById("leftDiv")
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


var MyDateInput = React.createClass({
    render: function () {
        return (
            <div>
                <input type="date" placeholder={this.props.inputHintText} style={{ width: this.props.inputWidth, height: this.props.inputHeight}} />
            </div>
        );
    }
});

var MyInquireDiv = React.createClass({
    getInitialState: function () {
        return {
            showInquireDiv: false
        };
    },
    componentWillReceiveProps: function () {
        this.setState({
            showInquireDiv: this.props.initialDivState
        });
    },
    hideInquireDiv: function () {
        this.setState({
            showInquireDiv: false
        });
    },
    render: function () {
        var showInquireDiv = this.state.showInquireDiv ? "block" : "none";
        var innerDivStyle = {
            position: "absolute",
            top: "25%",
            left: 0,
            width: "100%",
            textAlign: "center",
            backgroundColor: "transparent"
        };
        var outerDivStyle = {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(158, 158, 158, 0.8)",
            display: showInquireDiv
        };
        var inquireElementWidth = 280, inquireElementHeight = 30;
        var btnWidth = 120;

        return (
            <div style={outerDivStyle}>
                <div id="inquireItems" style={innerDivStyle}>
                    <MyNumberInput inputWidth={inquireElementWidth} inputHeight={inquireElementHeight} inputHintText="请输入房号" />
                    <MyDateInput inputWidth={inquireElementWidth} inputHeight={inquireElementHeight} inputHintText="请输入开始日期" />
                    <MyDateInput inputWidth={inquireElementWidth} inputHeight={inquireElementHeight} inputHintText="请输入结束日期" />
                    <div style={{ marginTop: "60px" }}>
                        <input type="button" value="确认" onClick={this.hideInquireDiv} style={{ width: btnWidth, height: "30px", marginLeft: inquireElementWidth + 4 - btnWidth }} />
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById("sample")
);