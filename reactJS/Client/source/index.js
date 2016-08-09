import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, bindActionCreators } from "redux";

import InquireLeftPageContent from "./leftModel";
import InquireCenterPageContent from "./centerModel";
import updateUserData from "./reducers";
import * as appActions from "./actions";


let store = createStore(updateUserData);

var App = React.createClass({
    render: function () {
        var operatorItems = ["插入", "删除", "..."];

        return (
            <div>
                <div style={{height: "800px"}}>
                    <div className="frame-div" style={{ width: "20%" }}>
                        <InquireLeftPageContent operatorItems={operatorItems} showInquireDiv={this.props.showInquireDiv} actions={this.props.actions} />
                    </div>
                    <div className="frame-div" style={{ width: "60%" }}>
                        <InquireCenterPageContent canDeleteItem={this.props.canDeleteItem} userData={this.props.userData} actions={this.props.actions} />
                    </div>
                    <div className="frame-div" style={{ width: "20%" }}></div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("sample")
);


function mapStateToProps(state) {
    // return {
    //     userData: state.userData,
    //     canDeleteItem: state.canDeleteItem,
    //     canEditText: state.canEditText,
    //     showInquireDiv: state.showInquireDiv
    // }

    return Object.assign({}, state);
}

export default connect(mapStateToProps)(App);

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);