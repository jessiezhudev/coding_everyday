import {renderToString} from 'react-dom/server'
import React from 'React'
import {StaticRouter} from 'react-router-dom'
import Routes from '../client/Routes'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
export default (req, store) =>{
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>)
    const html = `
    <html>
        <body>
            <div id="root">${content}</div>
            <script>
                window._initialState = ${JSON.stringify(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
    return html
}

