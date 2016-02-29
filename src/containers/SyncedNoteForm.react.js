import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {
    pouchGetNote,
    pouchPutNote,
} from '../actions'

import NoteForm from '../components/NoteForm.react'

const mapStateToProps = (state, ownProps) => {
    return {
        noteId: ownProps.params.noteId,
        isFetching: state.noteForm.isFetching,
        note: state.noteForm.note,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentWillMount: id => {
            dispatch(pouchGetNote(id))
        },
        onSaveClick: (note) => {
            dispatch(pouchPutNote(note))
                .then(() => {
                    dispatch(push('/'))
                })
        },
        onBackClick: () => {
            dispatch(push('/'))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteForm)
