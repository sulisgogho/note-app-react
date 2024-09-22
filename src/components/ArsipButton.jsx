import React from "react";

function ArsipButton({ id, onArchive, isArchived }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchived ? "Tampilkan" : "Arsipkan"}
    </button>
  );
}

export default ArsipButton;
