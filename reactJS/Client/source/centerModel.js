import React from "react";
import ReactDOM from "react-dom";


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
    componentWillReceiveProps: function (newProps) {
        this.setState({
            tdData: newProps.tdData
        });
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
            trData: newProps.userTrData,
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
    getInitialState: function () {
        return {
            userData: this.props.userData
        };
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            userData: newProps.userData
        });
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
    getInitialState: function () {
        return {
            userData: this.props.userData
        };
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            userData: newProps.userData
        });
    },
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
                <MyTbody deleteButtonState={this.props.deleteButtonState} userData={this.state.userData} />
            </table>
        );
    }
});

var InquireCenterPageContent = React.createClass({
    getInitialState: function () {
        return {
            userData: this.props.userData
        };
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            userData: newProps.userData
        });
    },
    render: function () {
        return (
            <div>
                <DivText textContent="xxx 系统" textSize="x-large" textMargin="60px" />
                <InquireInfoContent deleteButtonState={this.props.deleteButtonState} userData={this.state.userData} />
            </div>
        );
    }
});


export default InquireCenterPageContent