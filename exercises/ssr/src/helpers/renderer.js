import {renderToString} from 'react-dom/server'
import Home from '../client/components/Home'
import React from 'React'

export default () =>{
    const content = renderToString(<Home/>)
    const html = `
    <html>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
    return html
}

