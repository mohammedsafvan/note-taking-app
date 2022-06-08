const Sidebar = ({ notes, onAddNote, onDelete, activeNote, setActiveNote }) => {

const sortedNotes = notes.sort((a,b)=> b.modifiedDate - a.modifiedDate)

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note, i) => (
          <div
            className={`app-sidebar-note ${
              note.id === activeNote && "active"
            } `}
            key={i}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title ">
              <strong>{note.title}</strong>
              <button onClick={() => onDelete(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last modified date :{" "}
              {new Date(note.modifiedDate).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
