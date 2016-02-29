import { db } from './configureDB'

export const POUCH_REQUEST_FETCH_ALL_NOTES = 'POUCH_REQUEST_FETCH_ALL_NOTES'
export const POUCH_RECEIVE_FETCH_ALL_NOTES = 'POUCH_RECEIVE_FETCH_ALL_NOTES'
export function pouchRequestFetchAllNotes() {
    return {
        type: POUCH_REQUEST_FETCH_ALL_NOTES,
    }
}
export function pouchReceiveFetchAllNotes(res) {
    return {
        type: POUCH_RECEIVE_FETCH_ALL_NOTES,
        noteList: res.rows.map(row => row.doc)
    }
}

export function pouchFetchAllNotes() {
    return dispatch => {
        dispatch(pouchRequestFetchAllNotes())

        return db.query({
            map: ((doc) => {
                emit(doc.type)
            }).toString()
        }, {key: 'note', include_docs: true}).then(res => {
            dispatch(pouchReceiveFetchAllNotes(res))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const POUCH_REQUEST_GET_NOTE = 'POUCH_REQUEST_GET_NOTE'
export const POUCH_RECEIVE_GET_NOTE = 'POUCH_RECEIVE_GET_NOTE'

export function pouchRequestGetNote() {
    return {
        type: POUCH_REQUEST_GET_NOTE,
    }
}

export function pouchReceiveGetNote(note) {
    return {
        type: POUCH_RECEIVE_GET_NOTE,
        note: note,
    }
}

export function pouchGetNote(id) {
    return dispatch => {
        dispatch(pouchRequestGetNote())

        return db.get(id).then(res => {
            dispatch(pouchReceiveGetNote(res))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const POUCH_REQUEST_PUT_NOTE = 'POUCH_REQUEST_PUT_NOTE'
export const POUCH_RECEIVE_PUT_NOTE = 'POUCH_RECEIVE_PUT_NOTE'
export function pouchRequestPutNote() {
    return {
        type: POUCH_REQUEST_PUT_NOTE,
    }
}
export function pouchReceivePutNote() {
    return {
        type: POUCH_RECEIVE_PUT_NOTE,
    }
}
export function pouchPutNote(note) {
    return dispatch => {
        dispatch(pouchRequestPutNote())

        return db.put(note).then(res => {
            dispatch(pouchReceivePutNote())
        }).catch(err => {
            console.log(err)
        })
    }
}
