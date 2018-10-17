import React from 'react';
import ReactDOM from 'react-dom';

const appContainer = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>This is in React123 hot loading yeee</h1>;
  }
}

ReactDOM.render(<App />, appContainer);

if (module.hot) {
  console.log('Hot module received!');
  module.hot.accept();
}

export default App;
