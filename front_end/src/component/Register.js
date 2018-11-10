import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'

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

    onClickRegister() {
        var data ={
            userName: this.state.userName,
            password: this.state.password,
            password2: this.state.password2
          }

            if (this.state.userName !== '' && this.state.password !== '' && this.state.password2 !== ''){
                axios.post("http://localhost:3000/Register", data).then((res) =>{
                    alert("สมัครสมาชิกสำเร็จ")
                    this.props.history.push(`/`)
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


                                    <button 
                                            className="button is-primary is-fullwidth" 
                                            onClick = {() =>this.onClickRegister()}>Register
                                    </button>

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