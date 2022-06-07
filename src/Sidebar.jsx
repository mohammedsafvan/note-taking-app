const Sidebar = ({ notes, onAddNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note, i) => (
          <div className="app-sidebar-note" key={i}>
            <div className="sidebar-note-title">
              <strong>TITLE</strong>
              <button>Delete</button>
            </div>
            <p>note preview</p>
            <small className="note-meta">Last modified date : 07/06/22</small>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
