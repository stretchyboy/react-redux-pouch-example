import React from 'react'

export default React.createClass({
    componentWillMount() {
        this.props.onComponentWillMount()
    },

    render() {
        const {
            noteList,
            onAddClick,
            onListItemClick,
        } = this.props

        return (
            <div>
                <input type="text" ref='new_name' />
                <button
                    onClick={() => {
                        onAddClick(this.refs.new_name.value)
                    }}
                >
                    Add Note
                </button>

                <ul>
                {noteList.map(note =>
                    <li key={note._id}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                onListItemClick(note._id)
                            }}
                        >
                            {note.title}
                        </a>
                    </li>
                )}
                </ul>
            </div>
        )
    }
})
