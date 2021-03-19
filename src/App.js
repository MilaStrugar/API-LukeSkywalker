import './App.css';
import { Router, navigate } from '@reach/router';
import Category from './components/Luke';
import { useState } from 'react'
import NotFound from './components/NotFound'


function App() {
  const [category, setCategory] = useState("people")
  const [id, setID] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/${category}/${id}`)
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select" aria-label="Default select example">
          <option value="people">people</option>
          <option value="planets">planets</option>
        </select>
        <label>ID</label>
        <input value={id} onChange={(e) => setID(e.target.value)}></input>
        <button className="btn btn-primary">Submit</button>
      </form>
      <Router>
        <Category path="/:category/:id"></Category>
        <NotFound path="*"></NotFound>
      </Router>
    </div>
  );
}

export default App;
