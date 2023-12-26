import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css"

const Createusers = () => {

    let [name,setName] = useState("")
    let [salary,setSalary] = useState("")
    let [company,setCompany] = useState("")

    let navigate = useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        // console.log(name,salary,company)
        let payload = {name,salary,company}
        axios.post("http://localhost:3000/content",payload)
        .then(()=>{
            console.log("data has been added")
        })
       navigate("/user")
    }

    
    return(
        <div id={style.Myform}>
            <form>
                <table>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td><input type="text" value={name} onChange={nameData}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Salary</label></td>
                        <td><input type="text" value={salary} onChange={salaryData}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Company</label></td>
                        <td><input type="text" value={company} onChange={companyData}/></td>
                    </tr>
                    <tr id={style.btn}>
                        <td colSpan="2"><button onClick={formHandle}>Submit</button></td>
                    </tr>
                </table>
            </form>

        </div>
    )
}
export default Createusers