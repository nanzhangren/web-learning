import React from "react";
import ReactDOM from "react-dom";

var MainPage = require("./main.js");
var PageFrame = MainPage.PageFrame;
var TextShown = MainPage.TextShown;


var MySelect = React.createClass({
    getInitialState: function () {
        return {
            costsItems: ["Water Costs", "Electricity Costs", "Other Costs"]
        };
    },
    render: function () {
        var costsList = this.state.costsItems.map(function (item) {
            return (
                <option key={item} value={item}>{item}</option>
            );
        });
        return (
            <select>
                {costsList}
            </select>
        );
    }
});

var PayPageContent = React.createClass({
    componentDidMount: function () {
        ReactDOM.render(
            <PayPageContent />,
            document.getElementById("centerDiv")
        );
    },
    render: function () {
        return (
            <div>
                <TextShown textContent="xxx System" textSize="x-large" textMargin="60px" />
                <div style={{ marginTop: "180px" }}>
                    <MySelect />
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