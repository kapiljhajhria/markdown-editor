import './style.css'
import React, {useEffect, useState} from 'react';


export default function Editor(props) {
    const [textAreaValue, setTextAreaValue] = useState("")

    let testString = 'hi there how are you?  <h3 style="color: red"> h2 heading </h3>'


    // let testString =


    function handleChange(e) {
        setTextAreaValue(e.target.value);
    }

    function txtToMarkDown(txt) {
        let res = textAreaValue.replace(/(\n)/gm, (m, g) => `${m}<br>`);
        res = res.replace(/^([#][#] )(.*)/gm, (m, g) => `<h2>${m.slice(3)}</h2>`);
        res = res.replace(/^([#][#][#] )(.*)/gm, (m, g) => `<h3>\n${m.slice(3)}</h3>`);
        return React.createElement("p", {dangerouslySetInnerHTML: {__html: res}})
    }

    // function htmlDecode(input){
    //     var e = document.createElement('div');
    //     e.innerHTML = input;
    //     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    // }
    useEffect(() => {
        console.log("useffect called");

    }, [])
    return (
        <div className="homePage">

            <textarea className={"txtArea"}
                      value={textAreaValue}
                      onChange={handleChange}
            />

            <div className="txtOutput">
                {/*<div dangerouslySetInnerHTML={{ __html: htmlDecode(testString) }} />*/}
                {txtToMarkDown(textAreaValue)}
            </div>
        </div>
    )

}