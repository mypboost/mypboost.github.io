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
    <h2 className="big6-page-header">MYP Big6 Dimensions</h2>
    <p className="body">Learn more about each of our <strong>MYP Big6
    Life Dimensions</strong> by <br />clicking on the links below:</p>
  </div>
);

const healthAndFitness = (
  <div>
    <h3 className="sub-page-header purple">Physical Health &amp; Fitness</h3>
    <p className="body">Are you healthy? Do you have the foundations in place,
    the daily routines and healthy habits in play allow you to live your life
    on your terms? Fitness is specific to you and only you. Are you fit for
    purpose? There is only one way to find out!</p>
  </div>
);

const healthAndWellbeing = (
  <div>
    <h3 className="sub-page-header yellow">Mental Health & Wellbeing</h3>
    <p className="body">Does stress control your day, are you able to be present
    during conversations? Are the small things turning into bigger issues?
    Let&rsquo;s help you get to a better place.</p>
  </div>
);

const familyAndFriends = (
  <div>
    <h3 className="sub-page-header pink">Family & Friends</h3>
    <p className="body">Are you currently having, maintaining and pursuing the
    relationships you desire as an individual? Are you living your life with a
    sense of responsibility, raising your personal standards and expectations
    of others?</p>
  </div>
);

const workLifeBalance = (
  <div>
    <h3 className="sub-page-header orange">Career & Work/Life Balance</h3>
    <p className="body">Why do you go to work? Doe the return from your job outlay
    the job role itself? Are you happy at work, are you spending too much time at
    work? MYP is here to help you work smarter, more efficiently and help you discover
    you true value. Lets go make a difference together.</p>
  </div>
);

const financialWellbeing = (
  <div>
    <h3 className="sub-page-header red">Wealth & Financial Wellbeing</h3>
    <p className="body">Money is important but it’s not everything. you need to be in
    a place where you are in control of money, not being controlled by money. Do you
    know how top budget, save or invest? You are going to learn all of this and much
    more with MYP.</p>
  </div>
);

const selfActualization = (
  <div>
    <h3 className="sub-page-header blue">Self Actualization</h3>
    <p className="body">The realisation or fulfilment of your talents and potential.
    Are you currently working at or even exploring what you are really capable off?
    If you are not sure, i’m going to make an educated guest and say probably not,
    few of us will ever do this, but working on it is the important part. Let’s go!</p>
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
          {"< Back to Score Generator"}
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
          {"< Back to MYP Big 6 Dimensions"}
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
