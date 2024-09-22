import React from "react";
import CatatanItemBody from "./CatatanItemBody";
import DeleteButton from "./DeleteButton";
import ArsipButton from "./ArsipButton";

function CatatanItem({ id, title, body, createdAt, onDelete, onArchive, isArchived }) {
  return (
    <div className="note-item">
      <CatatanItemBody title={title} createdAt={createdAt} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArsipButton id={id} onArchive={onArchive} isArchived={isArchived} />
    </div>
  );
}

export default CatatanItem;
