import React from 'react';
import './App.css';
import CommentComponent from './components/CommentComponent/CommentComponent'

class App extends React.Component {
  render() {
    return <div className="App">
      <CommentComponent />
    </div>;
  }
}
export default App;