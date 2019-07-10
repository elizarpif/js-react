import React from 'react';
import './App.css';

global.ss = "ss"

class Input extends React.Component {
    OnTextChange = event => {
        this.props.onChange(event.target.value);
    }
    render() {
        return ( <
            div >
            <
            label className = "Label" > Напиши свой отзыв < /label> <
            input className = "Input"
            type = "text"
            name = "myText"
            onChange = { this.OnTextChange }
            /> < /
            div >
        );
    }
}


class Button extends React.Component {
    OnBtnClick = (event) => {
        this.props.onClick("f");
    }

    render() {
        return ( <
            div >
            <
            button className = "Button"
            onClick = { this.OnBtnClick } >
            Нажми кнопку < /button> < /
            div >
        );
    }
}

class Parent extends React.Component {
    state = {
        Text: "",
        DText: ""
    }
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this);
        this.ClickEvent = this.ClickEvent.bind(this);
    }
    ClickEvent(a) {
        this.setState({
            DText: this.state.Text
        })
    }

    handler(text) {
        this.setState({
            Text: text
        });
    }
    render() {
        return ( <
            div >
            <
            label className = "Label" > { this.state.DText } < /label> <
            Input onChange = { this.handler } > < /Input> <
            Button onClick = { this.ClickEvent } > < /Button> <   /
            div >
        );
    }
}

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        Parent / >
        <
        /header> < /
        div >
    );
}

export default App;