import React, { Component } from 'react';
import Modal from "react-modal";
import santa from './santa.png';
import heart from './heart.png';
import './App.css';

const appElement = document.getElementById('root');
Modal.setAppElement(appElement);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      error: null,
      file: ''
    }
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalOpen() {
    this.setState({
      modalOpen: true,
      error: null,
      // file: file
    });
  }

  handleModalClose() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.error && <div className="">
          Error: {this.state.error.message}</div>}
        <Modal classcloseTimeoutMS={150} isOpen={this.state.modalOpen} className="modal">
          <header className="App-header">
            <button className="x-button" onClick={this.handleModalClose}>X</button>
          </header>
          <div className="modal-content">
            <h1 className="dear-line">Dear Michael,</h1>
            <p>This year for Christmas,
              you get to pick your gift! Since we moved back to Florida,
              now we can finally spend time together again.
              If you want to go to Barnes {"&"} Noble to buy books, get hot coffee at Starbucks, or enjoy ice cream or froyo together - you name it. My treat!
              Can't wait for our special time together!
              </p>
              <p>I will talk with your mom about a good day for our nephew {"&"} aunt special time! Merry Christmas and I love you! </p>
            <div className="signature">
              <div className="signature-column">
                <img className="heart" src={heart} alt="emoji" />
                <p>Your Ati</p>
              </div>
            </div>
          </div>
        </Modal>
        <main className="App-main">
          <div className="" onClick={this.handleModalOpen}>
            <h1 className="title">Merry Christmas Michael!</h1>
            <img className="santa" src={santa} alt="emoji" />
          </div>
        </main>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
