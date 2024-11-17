import React from 'react'
import Back from './Back.jsx'

export default function Casc() {
    const text = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #e3f2fd, #bbdefb);
    color: #ffffff;
    font-size: 16px;
    line-height: 1.6;
}

.container {
    width: 100%;
    max-width: 1200px;
    background: #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
`
  return (
    <div>
        <h3 className='text-black mt-12'>CSS</h3>
        <p className='m-3'>CSS (Cascading Style Sheets) is used to style and design web pages by controlling layout, colors, fonts, and spacing. It separates content from presentation, enabling responsive and visually appealing designs across devices.</p>
        <h4 className='text-black font-semibold m-3'>
            Lets add some CSS to html code
        </h4>
        <Back children={text}></Back>
        <p className='m-3'>You see the drastic design change in the raew text? That's CSS for you</p>
    </div>
  )
}
