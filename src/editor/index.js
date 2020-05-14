import './style.css'
import React, {useEffect, useState} from 'react';


export default function Editor(props) {
    const [textAreaValue, setTextAreaValue] = useState("")

    function handleChange(e) {
        setTextAreaValue(e.target.value);
    }

    function txtToMarkDown(txt) {
        return txt + "\nconverted text"
    }
    useEffect(() => {
        console.log("useffect called");

    }, [])
    return (
        <div className="homePage">

            <textarea className={"txtArea"}
                      value={textAreaValue}
                      onChange={handleChange}
                      textAreaValue
            />

            <div className="txtOutput">
                {txtToMarkDown(textAreaValue)}
            </div>
        </div>
    )

}