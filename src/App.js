import './App.css';

function foo() {
    return 1;
}

function App() {
    return (
        <div className="App">
            <p>
                Hello this is a <a href="https://ardel-kardi-resume.web.app" className='link' onClick={foo}>link</a>
            </p>
        </div>
  );
}

export default App;
