import React from "react";

export default function AddNewImageForm(props) {
  // console.log("render of add new image form", props);
  const { onChange, onSubmit } = props;
  const { title, url } = props.values;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title for the image</label>{" "}
      <input type="text" name="title" onChange={onChange} value={title} />
      <label htmlFor="url">Link to the image</label>
      <input type="text" name="url" onChange={onChange} value={url} />
      <button type="submit">Add image!</button>
    </form>
  );
}
