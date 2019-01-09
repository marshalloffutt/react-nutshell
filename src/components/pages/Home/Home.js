import React from 'react';
import './Home.scss';

class Home extends React.Component {
  changeView = (e) => {
    const view = e.currentTarget.id;
    this.props.history.push(`/${view}`);
  }

  render() {
    return (
      <div className='Home mx-auto'>
        <div className="card-deck p-4 mt-5">
          <div className="card border-dark" id="messages" onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-dungeon fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Messages</h6>
              <p className="card-text">Newer better AOL</p>
            </div>
          </div>
          <div className="card border-dark" id='friends' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-diagnoses fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Friends</h6>
              <p className="card-text">Friend List?</p>
            </div>
          </div>
          <div className="card border-dark" id='weather' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-frown-open fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
              <p className="card-text">What is the current weather?</p>
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="card border-dark" id='events' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-bed fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Events</h6>
              <p className="card-text">Upcoming Events</p>
            </div>
          </div>
          <div className="card border-dark bg-danger">
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fas fa-skull fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">...</h6>
              <p className="card-text">Welcome to Nutshell</p>
            </div>
          </div>
          <div className="card border-dark" id='articles' onClick={this.changeView}>
            <div className="card-body text-center">
              <h4 className="card-title"><i class="fas fa-skull-crossbones fa-5x"></i></h4>
              <h6 className="card-subtitle mb-2 text-muted">Articles</h6>
              <p className="card-text">See your saved articles</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
