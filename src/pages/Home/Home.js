import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../../data/Categories";
import { useHistory } from "react-router-dom";

const Home = ({ name, setName, data, setData, fetchData }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const history = useHistory();

  console.log(name);
  console.log(category);
  console.log(difficulty);

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      alert("please enter details");
    } else {
      fetchData(category, difficulty);
      history.push("/quiz");
    }
  };

  return (
    <div className="home">
      <span className="heading">
        <h2>Please Enter following details ✍️</h2>
      </span>
      <TextField
        style={{ width: "300px", marginBottom: "30px" }}
        label="enter name"
        margin="normal"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        style={{ width: "300px", marginBottom: "30px" }}
        select
        label="Select Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {Categories.map((cat) => (
          <MenuItem key={cat.category} value={cat.value}>
            {cat.category}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        style={{ width: "300px" }}
        select
        id="outlined-basic"
        label="select difficulty"
        margin="normal"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <MenuItem value="easy">Easy</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="hard">Hard</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        style={{ marginTop: "30px" }}
      >
        start Quiz
      </Button>
    </div>
  );
};

export default Home;
