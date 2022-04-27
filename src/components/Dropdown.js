import React from 'react'
import { useState } from 'react'

const Dropdown = (props) => {
    
    const dat = props.JSonData
    const [divObj, makeDiv] = useState();
    const [Description, setDesc] = useState();
    const [hidden, setHideStatus] = useState(true);

    const toggleDesc = (text, links) => {
        if (hidden == false) {
            setDesc();
            makeDiv()
            setHideStatus(true)
        }
        else {
            setDesc(text);
            makeDiv(
                <div>
                    <div className='projDesc'>{text}</div>
                    <a className='projDesc' href={links} >Check out this project here.</a>
                </div>
            )
            setHideStatus(false)
        }
    }

    return (
        <button onClick={() => toggleDesc(dat.description, dat.link)}
            style={{ margin: 1, width: 250 }} >
            {dat.title}
            {divObj}
        </button>
    )
}

export default Dropdown