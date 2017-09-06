import React from 'react';
import {render} from 'react-dom';
import Footer from '../footer/footer.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(url)
    }
    render(){
        return <Footer />
    }
}
