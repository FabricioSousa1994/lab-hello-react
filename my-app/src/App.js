import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <div class="nav-and-header">
      <nav class="nav-bar">
        <img class="iron-logo" src='./images/ironlogo.png'/>
        <img class="menu-img" src='./images/menu.png'/>
      </nav>
        <div class="header">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button>Awesome!</button>
        </div>
        </div>
        <div class="last-section">
        <div class="final-div">
        <img src='./images/image1.png'/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div class="final-div">
          <img src='./images/image2.png'/>
          <h3>Components</h3>
          <p>Build encapsuled components that manage their state.</p>
        </div>
        <div class="final-div">
          <img src='./images/image3.png'/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div> 
        <div class="final-div">
        <img src='./images/image4.png'/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div> 
        </div>
      </div>
  );
}

export default App;
