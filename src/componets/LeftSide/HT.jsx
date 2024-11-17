import React from 'react'
import Back from './Back.jsx'
import Html from '../Webpage/html/Html.jsx'


export default function HT() {
    const codeSample = 
           `<h1>Web Devlopment Club, GTC</h1>
            <p>
                The Web Development Club at GTC fosters innovation, creativity, and collaboration. We explore cutting-edge web
                technologies, host workshops, hackathons, and projects, empowering all members to learn, grow, and excel in web
                development.</p>
            <h2>Our projects</h2>
            <ul>
                <li>GTC Interviewer dashboard</li>
                <li>Sustainability dashboard project</li>
                <li>Trickster tracker</li>
                <li>Mind map Project</li>
            </ul>
            <footer>&copy; 2024 all right reserved</footer>`
    return (
        <div>
                <p>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It forms the backbone of every webpage, providing a framework for displaying text, images, links, videos, and other elements. HTML uses a system of tags and attributes to define the structure and presentation of the content.</p>
                <p>At its core, HTML consists of a series of elements, each enclosed within angle brackets, like <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, and so on. These elements help organize the content into sections such as headings, paragraphs, lists, tables, and forms. For example, <code>&lt;h1&gt;</code> is used for the main heading, while <code>&lt;p&gt;</code> represents a paragraph.</p>
                <h4>Eg:</h4>
                <Back children={codeSample}>
                    
                </Back>
        </div>
    )
}
