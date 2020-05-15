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
        // let res = textAreaValue.replace(/(\n)/gm, (m, g) => `${m}<br>`);
        let res = textAreaValue;


        res = res.replace(/^[#] (.*)\n?/gm, (m, g) => `<h1>${g}</h1>`);
        res = res.replace(/^[#][#] (.*)\n?/gm, (m, g) => `<h2>${g}</h2>`);
        res = res.replace(/^[#][#][#] (.*)\n?/gm, (m, g) => `<h3>${g}</h3>`);
        res = res.replace(/^[-] (.*)\n?/gm, (m, g) => `<li>${g}</li>`);
        res = res.replace(/^[-][-][-] (.*)\n?/gm, (m, g) => `<hr>${g}</hr>`);
        res = res.replace(/^\s|w*$/gm, (m, g) => `<br>`);

        return React.createElement("div", {dangerouslySetInnerHTML: {__html: res}})
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