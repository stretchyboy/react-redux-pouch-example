import React from 'react'

export default React.createClass({
    componentWillMount() {
        this.props.onComponentWillMount(this.props.noteId)
    },

    render() {
        const {
            isFetching,
            note,
            onBackClick,
        } = this.props

        if (isFetching) {
            return <p>Fetching...</p>
        }

        return (
            <div>
                <h3>{note.title}</h3>
                <a
                    href="#"
                    onCLick={e => {
                        e.preventDefault()
                        onBackClick()
                    }}
                >Back</a>
            </div>
        )
    }
})
