import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    render() {
        return (
            <div>
                <footer id='footer' className="footer">
                  
                        <span className="text-muted">All Reights Reserved 2020 @Me</span>
                   
                </footer>
            </div>
        );
    }
}

export default FooterComponent;