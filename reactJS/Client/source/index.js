import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

import InquireLeftPageContent from "./leftModel";
import InquireCenterPageContent from "./centerModel";
import updateUserData from "./reducers";


let store = createStore(updateUserData);

var App = React.createClass({
    render: function () {
        var operatorItems = ["插入", "删除", "撤销", "重做"];

        return (
            <div>
                <div style={{height: "800px"}}>
                    <div className="frame-div" style={{ width: "20%" }}>
                        <InquireLeftPageContent operatorItems={operatorItems} showInquireDiv={this.props.present.showInquireDiv} dispatch={this.props.dispatch} />
                    </div>
                    <div className="frame-div" style={{ width: "60%" }}>
                        <InquireCenterPageContent activeRowIndex={this.props.present.activeRowIndex} activeColumnIndex={this.props.present.activeColumnIndex} canDeleteItem={this.props.present.canDeleteItem} canEditText={this.props.present.canEditText} userData={this.props.present.userData} dispatch={this.props.dispatch} />
                    </div>
                    <div className="frame-div" style={{ width: "20%" }}></div>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return state;
}

var AppWrapper = connect(mapStateToProps)(App);


ReactDOM.render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>,
    document.getElementById("sample")
);