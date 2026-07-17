import { useState, useEffect } from "react";

function Notes() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("nexoraNotes");

        if (savedNotes) {
            return JSON.parse(savedNotes);
        }

        return [
            {
                id: 1,
                title: "Welcome",
                content: "Welcome to Nexora 🚀"
            }
        ];
    });

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        localStorage.setItem("nexoraNotes", JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (title.trim() === "" || content.trim() === "") return;

        if (editingId !== null) {
            setNotes(
                notes.map((note) =>
                    note.id === editingId
                        ? {
                              ...note,
                              title,
                              content,
                          }
                        : note
                )
            );

            setEditingId(null);
        } else {
            setNotes([
                {
                    id: Date.now(),
                    title,
                    content,
                },
                ...notes,
            ]);
        }

        setTitle("");
        setContent("");
    };

    const deleteNote = (id) => {
        if (id === 1) return;

        setNotes(notes.filter((note) => note.id !== id));
    };

    const editNote = (note) => {
        setTitle(note.title);
        setContent(note.content);
        setEditingId(note.id);
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
                    {editingId !== null ? "💾 Save Note" : "➕ Add Note"}
                </button>
            </div>

            {notes.map((note) => (
                <div
                    key={note.id}
                    className="note-card"
                >
                    <h3>{note.title}</h3>

                    <p>{note.content}</p>

                    {note.id !== 1 && (
                        <div className="note-actions">
                            <button onClick={() => editNote(note)}>
                                ✏️ Edit
                            </button>

                            <button onClick={() => deleteNote(note.id)}>
                                🗑️ Delete
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Notes;