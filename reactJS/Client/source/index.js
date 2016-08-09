import React from "react";
import ReactDOM from "react-dom";

import InquireLeftPageContent from "./leftModel";
import InquireCenterPageContent from "./centerModel";
import WaterCostsData from "./data";


var App = React.createClass({
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
        var initData = this.sortData(WaterCostsData);
        return {
            showDeleteButton: false,
            userData: initData
        };
    },
    updataUserData: function (newItem) {
        var lastItem = this.state.userData[this.state.userData.length - 1];
        var money = parseInt(newItem.money);
        var newUserDataItem = [newItem.date, lastItem.data[1] + money * 0.38, lastItem.data[2], money];

        this.state.userData.unshift({data: newUserDataItem, show: true});

        this.setState({
            userData: this.state.userData
        });
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
                        <InquireLeftPageContent operatorItems={operatorItems} deleteButtonCallback={this.changeDeleteButtonState} updateUserDataCallback={this.updataUserData} />
                    </div>
                    <div className="frame-div" style={{ width: "60%" }}>
                        <InquireCenterPageContent deleteButtonState={this.state.showDeleteButton} userData={this.state.userData} />
                    </div>
                    <div className="frame-div" style={{ width: "20%" }}></div>
                </div>
            </div>
        );
    }
});


ReactDOM.render(
    <App />,
    document.getElementById("sample")
);