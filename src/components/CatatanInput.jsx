import React from "react";

class CatatanInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;

    if (title.length <= this.state.maxTitleLength) {
      this.setState({ title });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const remainingCharacters = this.state.maxTitleLength - this.state.title.length;
    return (
      <div className="note-input">
        <h1>Buat Catatan</h1>
        <form className="note-input__form" onSubmit={this.onSubmitEventHandler}>
          <p> Sisa karakter : {remainingCharacters}</p>
          <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} className="note-input__title" />
          <input type="text" placeholder="Buat catatanmu disini...." value={this.state.body} onChange={this.onBodyChangeEventHandler} className="note-input__body" />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default CatatanInput;
