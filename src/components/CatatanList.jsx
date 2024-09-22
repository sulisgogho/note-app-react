import React from "react";
import CatatanItem from "./CatatanItem";

function CatatanList({ notes, onDelete, onArchive }) {
  if (!notes.length) {
    return (
      <div className="catatan-list">
        <h1>Catatan Aktif</h1>
        <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
      </div>
    );
  }

  return (
    <div className="catatan-list">
      <h1>Catatan Aktif</h1>
      <div className="notes-list">
        {notes.map((note) => (
          <CatatanItem key={note.id} id={note.id} title={note.title} body={note.body} createdAt={note.createdAt} onDelete={onDelete} onArchive={onArchive} />
        ))}
      </div>
    </div>
  );
}

export default CatatanList;
