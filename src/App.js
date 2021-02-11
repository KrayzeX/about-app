import React from 'react';
import './App.css';

import works from './works';
import Header from './components/header/header';
import About from './components/about/about';
import PortfolioItem from './components/portfolioItem/portfolioItem';
import ContactForm from './components/contactForm/contactForm';

class App extends React.Component {
  state = {
    closed: true
  };

  openForm() {
    this.setState({
      closed: false
    });
  }

  closeForm() {
    this.setState({
      closed: true
    });
  }
  render() {
    return (
      <div className='app'>
        <Header brand='Kreez Winston'></Header>

        <main className='main'>
          <About title='React developer Kreez Winston'>
            <p>
              Developing using one of the best fraemwork 
              <br />
              the best SPA!
            </p>
            <p>Join to me and we make this world better.</p>
          </About>

          <div className='portfolio'>
            <div className='container'>
              {works.map(work => (
                <PortfolioItem key={work.id} work={work} />
              ))}
            </div>
          </div>

          <div className='contacts'>
            <div className='container'>
              {this.state.closed ? (
                <button
                  className='button'
                  onClick={() => this.openForm()}
                >
                  Write me
                </button>
              ) : (
                <div>
                  <hr />
                  <ContactForm
                    onSubmit={() => {this.closeForm()}}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
