import './css/reset.css'
import './css/style.css'
import Main from './Components/Main'
import Nav from './Components/Nav'
import Project from './Components/Project'

function App() {
  return (
    <>
      <Main/>
      <Nav page="Profile"/>
      <Project />
    </>
  );
}

export default App;
