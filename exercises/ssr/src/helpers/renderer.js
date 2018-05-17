import {renderToString} from 'react-dom/server'
import Home from '../client/components/Home'
import React from 'React'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'
import {Provider} from 'react-redux'
// import { renderRoutes } from 'react-router-config';

export default (req, store, context) =>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <Routes/>
            </StaticRouter>
        </Provider>)
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

