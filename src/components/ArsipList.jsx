import React from "react";
import CatatanItem from "./CatatanItem";

function ArsipList({ notes, onDelete, onUnarchive }) {
  // Periksa apakah tidak ada catatan arsip
  if (!notes.length) {
    return (
      <div className="catatan-list">
        <h1>Arsip Catatan</h1>
        <p className="notes-list__empty-message">Tidak ada catatan arsip</p>
      </div>
    );
  }

  return (
    <div className="catatan-list">
      <h1>Arsip Catatan</h1>
      <div className="notes-list">
        {notes.map((note) => (
          <CatatanItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            onDelete={onDelete}
            onArchive={onUnarchive} // Gunakan fungsi unarchive di sini
            isArchived
          />
        ))}
      </div>
    </div>
  );
}

export default ArsipList;
