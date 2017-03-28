import React, {PropTypes}  from 'react';
import './App.css';

const App = (props) => (
	<div className="pageContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {props.children}
	</div>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(React.PropTypes.node),
        PropTypes.node,
    ]),
};

export default App;
