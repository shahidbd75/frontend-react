import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fifa World Cup 2023</h2>
        <fieldset>
          <legend>Match detail</legend>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Spain</td>
                <td>Argentina</td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </header>
    </div>
  );
}

export default App;
