import React, { useState } from "react";
import axios from "axios";

function Search(props) {
  console.log(props);
  const [input, setInput] = useState({});

  const onChange = (e) => {
    e.persist();
    setInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    axios
      .get(
        `https://jobs.github.com/positions.json?description=${input.description}&location=${input.location}`
      )
      .then((res) => {
        props.setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="search">
      <form>
        <span>Location:</span>
        <input
          name="location"
          value={input.location}
          onChange={(e) => onChange(e)}
        />
        <span>Description:</span>
        <input
          name="description"
          value={input.description}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
