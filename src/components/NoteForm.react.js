import React from 'react'

export default React.createClass({
    componentWillMount() {
        this.props.onComponentWillMount(this.props.noteId)
    },

    render() {
        const {
            isFetching,
            note,
            onSaveClick,
            onBackClick,
        } = this.props

        if (isFetching) {
            return <p>Fetching...</p>
        }

        return (
            <div>
                <h3>{note.title}</h3>

                <textarea
                    ref='body'
                    cols="30"
                    rows="10"
                    defaultValue={note.body}
                />
                <button onClick={() => {
                    onSaveClick(Object.assign(note, {
                        body: this.refs.body.value
                    }))
                }}>Save</button>

                <p>
                    <a
                        href="#"
                        onCLick={e => {
                            e.preventDefault()
                            onBackClick()
                        }}
                    >Back</a>
                </p>
            </div>
        )
    }
})
