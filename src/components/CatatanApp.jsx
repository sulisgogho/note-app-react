import React from "react";
import { getInitialData } from "../utils/index";
import CatatanList from "./CatatanList";
import CatatanInput from "./CatatanInput";
import CatatanNavbar from "./CatatanNavbar";
import ArsipList from "./ArsipList";

class CatatanApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNotes: getInitialData().filter((note) => !note.archived), // Catatan aktif
      archivedNotes: getInitialData().filter((note) => note.archived), // Catatan yang diarsipkan
      searchQuery: "", // Status untuk pencarian
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  // Handler untuk menghapus catatan
  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        activeNotes: prevState.activeNotes.filter((note) => note.id !== id),
        archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
      };
    });
  }

  // Handler untuk menambahkan catatan baru
  onAddNoteHandler({ title, body }) {
    const id = Date.now(); // Menggunakan timestamp sebagai id unik
    const createdAt = new Date().toISOString(); // Mendapatkan tanggal saat ini

    const newNote = {
      id,
      title,
      body,
      createdAt,
      archived: false,
    };

    this.setState((prevState) => {
      return {
        activeNotes: [...prevState.activeNotes, newNote],
      };
    });
  }

  // Handler untuk pencarian catatan
  onSearchHandler(query) {
    this.setState({ searchQuery: query });
  }

  // Handler untuk mengarsipkan catatan
  onArchiveHandler(id) {
    const noteToArchive = this.state.activeNotes.find((note) => note.id === id);
    noteToArchive.archived = true;

    this.setState((prevState) => {
      return {
        activeNotes: prevState.activeNotes.filter((note) => note.id !== id),
        archivedNotes: [...prevState.archivedNotes, noteToArchive],
      };
    });
  }

  // Handler untuk mengembalikan catatan dari arsip ke catatan aktif
  onUnarchiveHandler(id) {
    const noteToUnarchive = this.state.archivedNotes.find((note) => note.id === id);
    noteToUnarchive.archived = false;

    this.setState((prevState) => {
      return {
        archivedNotes: prevState.archivedNotes.filter((note) => note.id !== id),
        activeNotes: [...prevState.activeNotes, noteToUnarchive],
      };
    });
  }

  render() {
    // Filter catatan aktif berdasarkan pencarian
    const filteredNotes = this.state.activeNotes.filter((note) => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));

    return (
      <div className="catatan-app">
        <CatatanNavbar onSearch={this.onSearchHandler} />
        <CatatanInput addNote={this.onAddNoteHandler} />
        <CatatanList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <ArsipList notes={this.state.archivedNotes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler} />
      </div>
    );
  }
}

export default CatatanApp;
