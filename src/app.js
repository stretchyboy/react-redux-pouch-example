import React from 'react'
import ReactDOM from 'react-dom'
import {
    Provider,
} from 'react-redux'

import {
    Router,
    Route,
    IndexRoute,
//    browserHistory as history,  // browserHistory is recommended for production
    hashHistory as history,  // For development
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
const store = configureStore()

import { db } from './configureDB'
import {
    pouchFetchAllNotes,
} from './actions'

import App from './components/App.react'
import NoteList from './containers/SyncedNoteList.react'
import NoteForm from './containers/SyncedNoteForm.react'

// Subscribe PouchDB change event
db.changes({
    since: 'now',
    live: true,
}).on('change', change => {
    // Very idiot and inefficient way to sync.
    // In product app, this should be more sophisticated like: http://pouchdb.com/2015/02/28/efficiently-managing-ui-state-in-pouchdb.html
    store.dispatch(pouchFetchAllNotes())
}).on('error', err => {
    console.log(err)
});

// Set up router
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
