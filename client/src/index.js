import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation.jsx';

const appContainer = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>This is in React hot loading yeee</span>

        <Navigation />
      </div>
    );
  }
}

ReactDOM.render(<App />, appContainer);

if (module.hot) {
  console.log('Hot module received!');
  module.hot.accept();
}

export default App;
