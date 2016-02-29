import {
    combineReducers,
    createStore,
    applyMiddleware,
} from 'redux'
import {
//    browserHistory as history,
    hashHistory as history,
} from 'react-router'
import {
    routerReducer,
    routerMiddleware,
    push,
} from 'react-router-redux'
const historyMiddleware = routerMiddleware(history)
import thunkMiddleware from 'redux-thunk'

import noteListReducer from './reducers/note-list'
import noteFormReducer from './reducers/note-form'

export default () => {
    const rootReducer = combineReducers({
        noteList: noteListReducer,
        noteForm: noteFormReducer,
        routing: routerReducer,
    })

    const store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            historyMiddleware,
        ))

    return store
}
