import React, { Component } from 'react'; //We use the Component class to create the component

export default class MySection extends Component{
    render(){
        return (
            <section>
                <h2>My Section</h2>
                {this.props.childen}
            </section>
        );
    }
}