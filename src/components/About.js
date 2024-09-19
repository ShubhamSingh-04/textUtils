import React from 'react'

let myStyle = {
    width: '100%'
}


export default function About() {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <h2>About textUtils</h2>
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <h5>A Project by <a href="https://www.linkedin.com/in/shubhamsingh3804?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBu3c048rTlCV%2BrtFxOXqmA%3D%3D" target='_blank'>Shubham Singh</a></h5>
                        <p><strong>Website Name: textUtils</strong>
                            <ul>
                                <li> Purpose: The website allows users to perform various text manipulations such as converting text to uppercase, lowercase, copying the text, removing extra spaces, and resetting the input field.</li>
                                <li> UI Design: The interface is clean and minimalistic, making it easy to use. It has a clear header, text input area, and several buttons for text manipulation.</li>
                            </ul>

                            <ul>
                                <p><strong>Key Features:</strong> </p>
                                <p>Text Conversion Options:
                                    <ul>
                                        <li> Convert to Upper Case: Converts all input text to uppercase.</li>
                                        <li>Convert to Lower Case: Changes all input text to lowercase.</li>
                                    </ul>
                                </p>

                                <p>Text Management:
                                    <ul>
                                        <li>Copy Text: Provides an easy way to copy the manipulated text to the clipboard.
                                        </li>
                                        <li> Remove Extra Spaces: Automatically removes any unnecessary extra spaces between words in the text.</li>
                                    </ul>
                                </p>

                                <p> Text Summary:
                                    <ul>
                                        <li> Below the text input area, the website displays a summary of the entered text, showing the number of words, characters, and estimated reading time.</li>
                                    </ul>
                                </p>
                            </ul>

                            <ul>
                                <p><strong>Layout and Components:</strong> </p>
                                <ul>
                                    <li>Header: Features navigation links such as "Home" and "About Text."</li>
                                    <li>Main Section: Contains a prominent instruction: "Enter your text below," followed by a large text input box.</li>
                                    <li>Text Manipulation Buttons: Below the input box are multiple buttons to convert text, copy, remove spaces, or reset.</li>
                                    <li> Text Output Area: A section labeled "Converted Text Will Appear Here" is where users can view the manipulated text.</li>
                                    <li>Text Summary Section: Displays statistics about the input text, helping users to gauge the content's length and readability.</li>
                                </ul>
                            </ul>

                            <ul>
                                <p><strong>Technologies:</strong> </p>
                                <ul>
                                    <li> React.js: This interactive, dynamic text utility website is built using React, offering fast rendering and a smooth user experience. The buttons and text manipulation options are handled by React's state management, enabling real-time updates.</li>
                                    <li>Uses React's react-router-dom for fast & efficient loading of components.</li>
                                    <li>CSS: The website uses basic CSS styling from BootStrap, with a focus on simplicity and clarity.</li>
                                </ul>
                            </ul>








                            
                           
                            
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
