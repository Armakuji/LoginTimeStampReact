import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'
import { Link } from "react-router-dom";


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userName: '',
            password: ''
        }
    }

    componentDidMount() {
        this.getData()

    }

    getData() {
        axios.get('http://localhost:3000/user')
            .then((res) => { console.log(res) })
    }


    addUser(userName) {
        console.log(userName.target.value)
        this.setState({
            userName: userName.target.value
        })

    }

    addPassword(password) {
        console.log(password.target.value)
        this.setState({
            password: password.target.value
        })

    }

    onClickCheckUser() {
        // axios.post('http://localhost:3000/user', {
        //     userName: this.state.userName
        // })
        //     .then((res) => {
        //         console.log(res)
        //         this.getData()
        //     })
    }

    render() {
        return (

            <div className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-two-fifths">
                            <div className="box">
                                <div className="field is-horizontal">
                                    <label className="label is-large">Welcome</label>
                                </div>

                                <div className="field">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="EMAIL"
                                        onChange={(input) => this.addUser(input)}
                                    />
                                </div>

                                <div className="field">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="PASSWORD"
                                        onChange={(input) => this.addPassword(input)}
                                    />
                                </div>

                                <div className="field">
                                    <Link to="/Home">
                                        <button className="button is-primary is-fullwidth">LOGIN</button>
                                    </Link>

                                </div>
                                <div className="field">
                                    <button className="button is-link is-fullwidth">LOGIN WITH FACEBOOK</button>
                                </div>
                            </div>

                            <div className="field">
                                <Link to="/Register">
                                    <button className="button is-danger is-rounded is-fullwidth" >REGISTER</button>
                                </Link>
                            </div>

                        </div>




                    </div>
                </div>



            </div>
        )
    }
}

export default Login; 