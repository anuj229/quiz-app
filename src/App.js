import './App.css';
import Header from './components/header/Header'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Result from './pages/result/Result';

function App() {
  const [data, setData] = useState();
    const [name, setName] = useState("");
    const[score,setScore] = useState(0);
    
  const fetchData = async (category="", difficulty="") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setData(data.results);
    
  };
     
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home
            data={data}
            setData={setData}
            name={name}
            setName={setName}
            fetchData={fetchData}
          />
        </Route>
        <Route exact path="/quiz">
          <Quiz name={name} data={data} score={score} setScore={setScore} />
        </Route>
        <Route exact path="/result">
          <Result score={score} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
