import React, { Component } from 'react';

class First extends Component{
    render(){
        return(<p>This is the first namespaced component</p>)
    }
}

class Second extends Component{
    render(){
        return(
            <p>This is the second namespaced component</p>
        )
    }
}

export default class MyComponent extends Component{
    render(){
        return(
            <section>{this.props.children}</section>
        )
    }
}

MyComponent.First = First //*We can make the components to share the same name prefix
MyComponent.Second = Second

