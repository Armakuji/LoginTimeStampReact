import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'
import { Link } from "react-router-dom"

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userName: '',
            password: '',
            comfirmPassword: ''
        }
    }

    componentDidMount() {
        this.getData()

    }

    getData() {
        axios.get('http://localhost:3000/user')
            .then((res) => this.setState({
                user: res.data
            }))
    }

    addUsername(userName) {
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

    addconfirmPassword(confirmPassword) {
        console.log(confirmPassword.target.value)
        this.setState({
            confirmPassword: confirmPassword.target.value
        })

    }

    onClickAddButton() {
        axios.post('http://localhost:3000/user', {
            username: this.state.userName,
            password: this.state.password
        })
            .then((res) => {
                console.log(res)
                this.getData()
            })
    }

    render() {
        return (

            <div className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-two-fifths">
                            <div className="box">
                                <div className="field is-horizontal">
                                    <label className="label is-large">Register</label>
                                </div>

                                <div className="field">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="EMAIL"
                                        onChange={(input) => this.addUsername(input)}
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
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="CONFIRM PASSWORD"
                                        onChange={(input) => this.addconfirmPassword(input)}
                                    />
                                </div>

                                <div className="field">

                                <Link to="/Home">
                                         <button className="button is-primary is-fullwidth">Register</button>
                                </Link>
                                    
                                </div>
                            </div>

                        </div>




                    </div>
                </div>



            </div>
        )
    }

}

export default Register;