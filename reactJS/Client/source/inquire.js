import React from "react";
import ReactDOM from "react-dom";

var MainPage = require("./index.js");
var PageFrame = MainPage.PageFrame;
var DivText = MainPage.DivText;
var MyText = MainPage.MyText;

var PayPage = require("./pay.js");
var MyNumberInput = PayPage.MyNumberInput;

var UserCostsData = require("./data.js");

var InquireLeftPageContent = React.createClass({
    getInitialState: function () {
        return {
            showInquireDiv: false,
            showDeleteButton: false
        };
    },
    changeInquireDivState: function () {
        this.setState({
            showInquireDiv: true
        });
    },
    changeDeleteButtonState: function () {
        var newState = true;
        this.setState({
            showDeleteButton: newState
        });
        this.props.deleteButtonCallback(newState);
    },
    render: function () {
        var self = this;
        var colorList = ["green", "blue", "red"];
        var costsList = self.props.operatorItems.map(function (item, index) {
            var liStyle = {
                display: "block",
                margin: "3px 0",
                height: "45px",
                lineHeight: "2em",
                fontSize: "larger",
                fontWeight: "600",
                fontFamily: "宋体",
                color: colorList[index % 3]
            };
            var clickEvent = null;
            if(index === 0) {
                clickEvent = self.changeInquireDivState;
            } else if(index === 1) {
                clickEvent = self.changeDeleteButtonState;
            }
            return (
                <li onClick={clickEvent} key={item} style={liStyle}>&nbsp;{item}</li>
            );
        });
        return (
            <div>
                <MyInquireDiv initialDivState={self.state.showInquireDiv} />
                <ul ref="costsListUl" id="costsListUl" style={{ marginTop: "239px" }}>
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

var MyTd = React.createClass({
    getInitialState: function () {
        return {
            canEditText: false,
            tdData: this.props.tdData
        };
    },
    saveText: function (event) {
        if(event.keyCode === 108 || event.keyCode === 13) {
            this.setState({
                canEditText: false,
                tdData: this.refs.textbox.value
            });
        }
    },
    handleDblClickEvent: function () {
        this.setState({
            canEditText: true
        });
    },
    render: function () {
        var tdData = this.state.tdData;
        var tdChild = this.state.canEditText ? <input type="text" ref="textbox" defaultValue={tdData} /> : <span>{tdData}</span>;

        return (
            <td onDoubleClick={this.handleDblClickEvent} onKeyUp={this.saveText}>{tdChild}</td>
        );
    }
});

var MyTr = React.createClass({
    getInitialState: function () {
        return {
            trData: this.props.userTrData,
            showDeleteButton: this.props.deleteButtonState
        };
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            showDeleteButton: newProps.deleteButtonState
        });
    },
    deleteTrData: function () {
        this.state.trData.show = false;
        this.setState({
            trData: this.state.trData
        });
        this.props.tbodyCallBack(this.state.trData, this.props.userTrIndex);
    },
    render: function () {
        var tdList = this.state.trData.data.map(function(item) {
            return (
                <MyTd key={item} tdData={item} />
            );
        });
        var deleteButtonState = { display: this.state.showDeleteButton ? "block" : "none" };
        return (
            <tr>
                {tdList}
                <td>
                    <input type="button" value="删除" onClick={this.deleteTrData} style={deleteButtonState} />
                </td>
            </tr>
        );
    }
});

var MyTbody = React.createClass({
    sortData: function (data) {
        for(let i = 0; i < data.length; i++) {
            for(let j = i + 1; j < data.length; j++) {
                if(data[i][0] < data[j][0]) {
                    let temp = data[j];
                    data[j] = data[i];
                    data[i] = temp;
                }
            }
        }
        return data.map(function(item) {
            return {
                data: item,
                show: true
            }
        });
    },
    getInitialState: function () {
        var initData = this.sortData(UserCostsData.waterCostsData);
        return {
            userData: initData
        };
    },
    updateUserData: function (trData, trIndex) {
        this.state.userData[trIndex] = trData;
        this.setState({
            userData: this.state.userData
        });
    },
    render: function () {
        var self = this;
        var trList = self.state.userData.map(function(item, index) {
            if(item.show) {
                return (
                    <MyTr key={"MyTr" + index} userTrData={item} userTrIndex={index} deleteButtonState={self.props.deleteButtonState} tbodyCallBack={self.updateUserData} />
                );
            }
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
                        <MyTextTd tdContent="使用量" />
                        <MyTextTd tdContent="缴费金额（元）" />
                    </tr>
                </thead>
                <MyTbody deleteButtonState={this.props.deleteButtonState} />
            </table>
        );
    }
});

var InquireCenterPageContent = React.createClass({
    render: function () {
        return (
            <div>
                <DivText textContent="xxx 系统" textSize="x-large" textMargin="60px" />
                <InquireInfoContent deleteButtonState={this.props.deleteButtonState} />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            showDeleteButton: false
        };
    },
    changeDeleteButtonState: function (newState) {
        this.setState({
            showDeleteButton: newState
        });
    },
    render: function () {
        var operatorItems = ["插入", "删除", "..."];

        return (
            <div>
                <div style={{height: "800px"}}>
                    <div className="frame-div" style={{ width: "20%" }}>
                        <InquireLeftPageContent operatorItems={operatorItems} deleteButtonCallback={this.changeDeleteButtonState} />
                    </div>
                    <div className="frame-div" style={{ width: "60%" }}>
                        <InquireCenterPageContent deleteButtonState={this.state.showDeleteButton} />
                    </div>
                    <div className="frame-div" style={{ width: "20%" }}></div>
                </div>
            </div>
        );
    }
});


var MyDateText = React.createClass({
    getInitialState: function () {
        return {
            textValue: false
        };
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            textValue: newProps.textValue
        });
    },
    render: function () {
        return (
            <div>
                <input type="text" disabled="true" value={this.state.textValue} style={{ width: this.props.inputWidth, height: this.props.inputHeight}} />
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
    componentWillReceiveProps: function (newProps) {
        this.setState({
            showInquireDiv: newProps.initialDivState
        });
    },
    hideInquireDiv: function () {
        this.setState({
            showInquireDiv: false
        });
    },
    formatNumber: function (num) {
        if(num > 0 && num < 10) {
            return "0" + num;
        }
        else {
            return num;
        }
    },
    getCurrentDate: function () {
        var date = new Date();
        return date.getFullYear() + "/" + this.formatNumber(date.getMonth()) + "/" + this.formatNumber(date.getDate());
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
                    <MyDateText inputWidth={inquireElementWidth} inputHeight={inquireElementHeight} textValue={this.getCurrentDate()} />
                    <MyNumberInput inputWidth={inquireElementWidth} inputHeight={inquireElementHeight} inputHintText="请输入金额" />
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