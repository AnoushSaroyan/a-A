import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabIdx: 0 };
        // const tabs = this.props.tabs
    }

    someMethod(tabIdx) {
        // setState
    }

    render() {
        return (
           // header // pass the titles 
            <Header tabs={ this.props.tabs } />
           // content

        );
    }
}

class Header extends React.Component {
    render() {

    }
}

