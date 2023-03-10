import React from "react";

function CreateArea(props) {
  const [notes, setNotes] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.add(notes);
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={notes.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
