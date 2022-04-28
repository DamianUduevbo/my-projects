import React, { useState } from 'react'

const Dropdown = (props) => {
    const dat = props.JSonData

    const originalButtonStyle = {
        margin: 1,
        width: 250,
        borderRadius: "5px",
        "animationName": "closeAnim",
        "animationDuration": ".5s"
    }

    const openButtonStyle = {
        margin: 1,
        width: 250,
        borderRadius: "5px 15px",
        "animationName": "openAnim",
        "animationDuration": ".1s"
    }

    const [divObj, makeDiv] = useState();
    const [Description, setDesc] = useState();
    const [hidden, setHideStatus] = useState(true);
    const [buttStyle, setStyle] = useState(originalButtonStyle)
    const [newClassName, setClassName] = useState("defaultButton")


    const close = () => {
        setDesc();
        setStyle(originalButtonStyle)
        setClassName("closeButton")
        makeDiv()
        setHideStatus(true)
    }

    const open = (text, links) => {
        //console.log(dev)
        console.log(Description)
        setClassName("openButton")
        setDesc(text);
        setStyle(openButtonStyle)

        makeDiv (
            <div id={"div-" + dat.title}>
                <div className='projDesc'>{text}</div>
                <a className='projDesc' href={links} >Check out this project here.</a>
            </div>
        )

        setHideStatus(false)
    }

    const toggleDesc = (text, links) => {
        if (hidden === false) {
            close()
        }
        else {
            open(text, links)
        }
    }

    return (
        <button id={dat.title} className={newClassName}
            onClick={() => {
                toggleDesc(dat.description, dat.link)
                const elem = document.getElementById(dat.title)
                if (elem !== null) {
                    console.log(elem.offsetHeight)
                }
            }}>
            {dat.title}
            {divObj}
        </button>
    )
}

export default Dropdown