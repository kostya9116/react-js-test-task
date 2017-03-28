import React, {Component} from "react";
import './style/headerStyle.css';
import {Grid, Button, Icon} from 'semantic-ui-react';
import {browserHistory} from "react-router";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.goHomePage = this.goHomePage.bind(this);
    }

    goHomePage() {
        browserHistory.push("/");
    }

    render() {
        return (
            <Grid className="headerContainer col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div
                    className="headerContentContainer col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 ">
                    <Button className="headerLogoContainer" onClick={this.goHomePage}>
                        <p className="headerLogoFirstHalf">Books</p>
                        <p className="headerLogoSecondHalf">Store</p>
                    </Button>
                </div>
            </Grid>

        );
    }
}


export default HeaderComponent;
