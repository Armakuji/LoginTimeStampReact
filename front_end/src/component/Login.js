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

    onClickLogin() {
        var data ={
            userName: this.state.userName,
            password: this.state.password,
          }

            if (this.state.userName !== '' && this.state.password !== ''){
                axios.post("http://localhost:3000/Login", data).then((res) =>{
                    alert("Login สำเร็จ")
                    this.props.history.push(`/Home`)
                }).catch(err => {
                    alert("อีเมลนี้ถูกใช้งานแล้วหรือพาสเวิดไม่ตรงกัน")
                    console.log(err);
                })
                }else{
                  alert("กรุณากรอกข้อมูลให้ครบถ้วน")
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
                                                onClick={()=>this.onClickLogin()}
                                        >LOGIN</button>
                                    

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