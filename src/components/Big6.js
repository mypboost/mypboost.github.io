import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import scrollTo from '../utils/scroll-to';

import '../style/big6.scss';

const index = (
  <div>
    <h2 className="large-header index-header">Myp Big6</h2>
  </div>
);

const healthAndFitness = (
  <div>
    Stuff goes in here
  </div>
);

const healthAndWellbeing = (
  <div>
    Stuff goes in here
  </div>
);

const familyAndFriends = (
  <div>
    Stuff goes in here
  </div>
);

const workLifeBalance = (
  <div>
    Stuff goes in here
  </div>
);

const financialWellbeing = (
  <div>
    Stuff goes in here
  </div>
);

const selfActualization = (
  <div>
    Stuff goes in here
  </div>
);

class Big6 extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = "index";
    this.data = Immutable.Map({
      'index': index,
      'Physical Health & Fitness': healthAndFitness,
      'Mental Health & Wellbeing': healthAndWellbeing,
      'Family & Friends': familyAndFriends,
      'Career & Work/Life Balance': workLifeBalance,
      'Wealth & Financial Wellbeing': financialWellbeing,
      'Self Actualization': selfActualization
    });
  }

  goToForm() {
    this.props.history.push('/');
  }

  componentDidUpdate(){
    scrollTo('page-top-anchor', -100);
  }

  changePage(event, selectedPage) {
    event.preventDefault();
    this.currentPage = selectedPage;
    this.forceUpdate();
  }

  renderSubPageLink(name, color) {
    return (
      <h3
        onClick={(event) => this.changePage(event, name)}
        className={"sub-page-link " + color}
      >
        {name}
      </h3>
    );
  }

  renderSubPageLinks() {
    return (
      <div>
        {this.renderSubPageLink('Physical Health & Fitness', 'purple')}
        {this.renderSubPageLink('Mental Health & Wellbeing', 'yellow')}
        {this.renderSubPageLink('Family & Friends', 'pink')}
        {this.renderSubPageLink('Career & Work/Life Balance', 'orange')}
        {this.renderSubPageLink('Wealth & Financial Wellbeing', 'red')}
        {this.renderSubPageLink('Self Actualization', 'blue')}
      </div>
    );
  }

  renderIndex() {
    return (
      <div className="video-index-wrapper lime">
        <button
          className="white-button return-to-form"
          onClick={this.goToForm.bind(this)}
        >
          {"< Back"}
        </button>
        {this.data.get('index')}
        {this.renderSubPageLinks()}
      </div>
    );
  }

  renderSubPage() {
    return(
      <div>
        <button
          className="white-button"
          onClick={(event) => this.changePage(event, "index")}
        >
          {"< Back"}
        </button>
        {this.data.get(this.currentPage)}
      </div>
    );
  }

  renderPage(){
    if (this.currentPage === "index") {
      return this.renderIndex();
    }
    return this.renderSubPage();
  }

  render() {
    return (
      <div>
        <Header />
        <Page className="video-page">
          {this.renderPage()}
        </Page>
        <Footer />
      </div>
    );
  }
}

Big6.propTypes = {
  history: PropTypes.object.isRequired
};

export default Big6;
