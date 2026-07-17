import { useState } from "react";

function Notes() {

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "Welcome",
            content: "Welcome to Nexora 🚀"
        }
    ]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addNote = () => {

        if (title.trim() === "" || content.trim() === "") return;

        setNotes([
            ...notes,
            {
                id: Date.now(),
                title,
                content
            }
        ]);

        setTitle("");
        setContent("");

    };

    return (

        <div className="notes-widget">

            <h2>📝 Notes</h2>

            <div className="note-input">

    <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
    />

    <button onClick={addNote}>
        Add Note
    </button>

</div>

            {notes.map(note => (

                <div
                    key={note.id}
                    className="note-card"
                >

                    <h3>{note.title}</h3>

                    <p>{note.content}</p>

                </div>

            ))}

        </div>

    );

}

export default Notes;