import {
    POUCH_REQUEST_GET_NOTE,
    POUCH_RECEIVE_GET_NOTE,
} from '../../actions/pouch'

const initialState = {
    isFetching: false,
    note: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POUCH_REQUEST_GET_NOTE:
            return Object.assign({}, state, {
                isFetching: true
            })

        case POUCH_RECEIVE_GET_NOTE:
            return Object.assign({}, state, {
                isFetching: false,
                note: action.note,
            })

        default:
            return state
    }
}
