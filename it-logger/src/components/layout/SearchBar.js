import React, {useRef, useEffect} from "react";
import {connect} from "react-redux";
import {searchLogs} from "../../actions/logActions";

const SearchBar=({searchLogs})=> {
    const text = useRef('')
    const onchange = e =>{
        searchLogs(text.current.value)
    }

    return (
        <nav className={"blue"} style={{marginBottom:"30px"}}>
            <div className="nav-wrapper">
                <form>

                    <div className="input-field">
                        <input id="search" type="search" required placeholder={'Search Logs..'} ref={text} onChange={onchange}/>
                            <label className="label-icon" htmlFor="search"><i
                                className="material-icons">search</i>


                            </label>
                            <i className="material-icons">close</i>


                    </div>
                </form>
            </div>
        </nav>
        )
    }



export default connect(null,{searchLogs}) (SearchBar);