import {renderToString} from 'react-dom/server'
import React from 'React'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet'

export default (req, store, context) =>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>)
    const helmet = Helmet.renderStatic()
    const html = `
    <html>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window._initialState = ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
    return html
}

