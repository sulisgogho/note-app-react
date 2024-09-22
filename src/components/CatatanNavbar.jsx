import React from "react";

class CatatanNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
    this.onSearchEventHandler = this.onSearchEvenetHandler.bind(this);
  }

  onSearchEvenetHandler(event) {
    this.setState(() => {
      return {
        note: event.target.value,
      };
    });
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <nav className="note-navbar">
        <h1 className="note-navbar__title">Notes</h1>
        <input type="text" placeholder="Cari Catatan..." value={this.state.note} onChange={this.onSearchEventHandler} />
      </nav>
    );
  }
}

export default CatatanNavbar;
