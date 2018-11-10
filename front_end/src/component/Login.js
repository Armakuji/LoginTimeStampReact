import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userName: '',
            password: ''
        }
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

    onClickLogin() {
        var data = {
            userName: this.state.userName,
            password: this.state.password
        }

        if (this.state.userName !== '' && this.state.password !== '') {
            axios.post("http://localhost:3000/login", data).then((res) => {
                console.log(res.data.message)
                var userName = res.data.message
                this.props.history.push(`/home/${res.data.message}`, userName)
            }).catch(err => {
                alert("กรุณาตรวจสอบข้อมูลให้ถูกต้อง")
                console.log(err);
            })
        } else {
            alert("กรุณากรอกข้อมูล")
        }
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

                                    <button className="button is-primary is-fullwidth"
                                        onClick={() => this.onClickLogin()}
                                    >LOGIN</button>


                                </div>
                                <div className="field">
                                    <FacebookLogin
                                        appId='253039525393926'
                                        fields="email,id"
                                        callback={this.responseFacebook}
                                        render={(renderProps) => (
                                            <button className='button is-info is-medium is-fullwidth' onClick={renderProps.onClick}>Facebook</button>
                                        )}
                                    />
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