import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";

const Homecrud = () => {
    return(
        <section id={style.nav}>
            {/* <a href="">Create-users</a>
            <a href="">Users</a> */}
            <Link to="/create">Create-users</Link>
            <Link to="/user">Users</Link>
        </section>
    )
}
export default Homecrud