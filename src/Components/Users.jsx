import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";

const Users = () => {

    let [state,setState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((response)=>{
            console.log(response.data);
            setState(response.data)
        })
    },[])
    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/content/${a}`)
        window.location.assign("/user")

    }
    return(
        <div id={style.profile}>
          {/* users */}
          {state.map((x)=>{
            return(
                <div id={style.box}>
                    {/* {x.name}
                    {x.id} */}
                    <table>
                        <tr>
                            <td colSpan="2">
                                 Employee id {x.id}
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>:{x.name}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>:{x.salary}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>:{x.company}</td>
                        </tr>
                        <tr>
                            <td><Link to={`/edit/${x.id}`}>Edit</Link></td>
                            <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                        </tr>
                    </table>

                </div>

            )
          })}
        </div>
    )
}
export default Users