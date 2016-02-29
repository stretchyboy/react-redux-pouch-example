import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider,
} from 'react-redux'

import configureStore from './store/configureStore'

import {
    Router,
    Route,
    IndexRoute,
//    browserHistory as history,
    hashHistory as history,
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App.react'
import NoteList from './containers/SyncedNoteList.react'
import NoteForm from './containers/SyncedNoteForm.react'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
        >
            <Route path='/' component={App}>
                <IndexRoute component={NoteList} />
                <Route path='notes/:noteId' component={NoteForm}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
