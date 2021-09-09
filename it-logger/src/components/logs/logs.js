import React ,{useEffect} from "react";
import LogItem from "./Logitem";
import { connect } from 'react-redux';
import Preloader from "../layout/Preloader";

import {getLogs} from "../../actions/logActions";
const  Logs= ({log:{logs,loading}, getLogs})=> {

    useEffect(()=>{
        getLogs()
        //eslint-disable-next-line
    },[])

    console.log(logs)

    if(loading||logs===null){
        return (
           <Preloader/>       )
    }
    return (
        <ul className={"collection with-header"}>
            <li className={"collapsible-header"}>
                <h4 className={"center"}>system logs</h4>
            </li>

            {!loading&& logs.length===0?
                (<p className={"center"}>no logs to show</p>)
                    :(logs.map(log=>(
                        <LogItem log={log} key = {log.id} />
                )))}

        </ul>
    );

}

const mapStateToProps = state=>({
    log:state.log
})
export default connect(mapStateToProps,{getLogs}) (Logs);