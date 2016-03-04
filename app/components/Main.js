var React = require('react')
var ReactDOM = require('react-dom')

var Main = React.createClass({
    render: function() {
        return ( <div>
            Hello from main!
            {this.props.children}
            </div>
        )
    }
});

module.exports = Main;