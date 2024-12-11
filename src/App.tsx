import React from 'react';
import logo from './logo.svg';
import './App.css';
import CommentComponent from './components/CommentComponent'

class App extends React.Component {
  render() {
    return <div className="App">
      <CommentComponent />
    </div>;
  }
}
export default App;