import React, { Component } from "react";
import 'bulma/css/bulma.css'
import axios from 'axios'

class Home extends Component {
    constructor(props) {
        
        super(props)
        
        this.state = ({
            userName: this.props.location.state,
            times: []
        })
        this.setTime()
        console.log(this.state.userName)  
        
    }

    setTime(){
    var data = {
        userName: this.state.userName
    } 
    axios.post('http://localhost:3000/time',data).then(res => {
        console.log(res.data.user)
        this.setState({
            times: res.data.user
        })

        
    }).catch(err => {
                console.log(err);
                
    })

    }
    showTime(){
        return this.state.times.map(({_id,time},index) =>
            <tr key={index}>
                <td>{index+1}</td>
        <       td>{time}</td>
            </tr>
        );
        
    }


   
    render() {
        return (
            <div className="Container ">
            <div className="section" >
            <div className='columns is-mobile '>
                <div className='column'></div>

                <div className="notification ">
                <h1 className="title is-1">Login Table</h1>
                <h1 className="subtitle">Name: {this.state.userName}</h1>
                <div className="notification is-primary">
                <table className="table is-hoverable is-fullwidth">
                            <thead>
                                <tr>
                                    <th><abbr title="No">No</abbr></th>
                                    <th><abbr title="Timestamp">Timestamp</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showTime()}
                            </tbody>
                        </table>
                </div>
                </div>

                <div className='column'></div>
            </div>
            </div>
            </div>
        )
    }
}

export default Home;