import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {
    pouchFetchAllNotes,
    pouchPutNote,
} from '../actions'

import NoteList from '../components/NoteList.react'

const id = () => Math.random().toString(36).substring(7)

const mapStateToProps = (state, ownProps) => {
    return {
        noteList: state.noteList.noteList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onComponentWillMount: () => {
            dispatch(pouchFetchAllNotes())
        },
        onAddClick: (title) => {
            if (title == '') {
                return
            }

            const _id = id()
            const note = {
                _id,
                title,
                type: 'note',
            }
            dispatch(pouchPutNote(note))
                .then(() => {
                    dispatch(push('notes/' + _id))
                })
        },
        onListItemClick: (_id) => {
            dispatch(push('notes/' + _id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList)
