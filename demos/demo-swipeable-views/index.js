import React from 'react';
import ReactDOM from 'react-dom';

import HorizontalTimelineContent from './HorizontalTimelineContent';
import GameInfo from '../resources/content';

// Directly importing the minified bootstrap css to avoid all the painful
// steps it will take otherwise to get it to work.
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0, 
      patches: [
        ["11/07/2018", "patch 4"],
        ["11/07/2017", "patch 3"],
        ["11/07/2016", "patch 2"],
        ["11/07/2015", "patch 1"],
      ]};
  }

  componentWillMount() {
    const patches = this.state.patches;
    this.data = patches.map((date, index) => {
      return ({
        date: patches[index][0],
        title: patches[index][1],
        component: (
          <div className='container' key={index}>
            <p>Hello world</p>
          </div>
        )
      });
    });
  }

  render() {
    console.log("dis data");
    console.log(this.data);
    return (
      <HorizontalTimelineContent
        content={this.data} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
