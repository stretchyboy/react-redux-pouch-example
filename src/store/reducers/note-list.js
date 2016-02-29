import {
    POUCH_REQUEST_FETCH_ALL_NOTES,
    POUCH_RECEIVE_FETCH_ALL_NOTES,
} from '../../actions/pouch'

const initialState = {
    isFetching: false,
    noteList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POUCH_REQUEST_FETCH_ALL_NOTES:
            return Object.assign({}, state, {
                isFetching: true
            })

        case POUCH_RECEIVE_FETCH_ALL_NOTES:
            return Object.assign({}, state, {
                isFetching: false,
                noteList: action.noteList,
            })
        default:
            return state
    }
}
