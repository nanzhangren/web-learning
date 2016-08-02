import React from 'react';
import ReactDOM from 'react-dom';

var ChoiceButton = React.createClass({
    render: function () {
        var divStyle = {
            width: this.props.btnSize,
            height: this.props.btnSize,
            margin: 8,
            backgroundColor: this.props.btnColor
        };

        return (
            <div style={divStyle}>
                <input type="button" value={this.props.btnValue} />
            </div>
        );
    }
});

var FrameDiv = React.createClass({
    render: function () {
        var divStyle = {
            // float: this.props.frameDivPosition,
            display: "inline-block",
            width: this.props.frameDivWidth,
            height: "100%",
            margin: 0,
            backgroundColor: this.props.frameDivColor
        };

        return (
            <div style={divStyle}></div>
        );
    }
});

var App = React.createClass({
    render: function () {
        var divStyle = {
            width: "100%",
            height: this.props.height
        };

        return (
            <div style={divStyle}>
                <FrameDiv frameDivWidth="20%" frameDivColor="red" />
                <FrameDiv frameDivWidth="60%" frameDivColor="lightblue">
                    <ChoiceButton btnSize="210px" btnColor="red" btnValue="Pay" />
                    <ChoiceButton btnSize="210px" btnColor="green" btnValue="Find" />
                </FrameDiv>
                <FrameDiv frameDivWidth="20%" frameDivColor="yellowgreen" />
            </div>
        );
    }
});

ReactDOM.render(
    <App height="800px" />,
    document.getElementById('sample')
);
