import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

class SidebarPage extends React.Component {
  constructor(props) {
    super(props);
    this.menuState = "initial";
    this.currentPage = "index";
  }

  changePage(event, link) {
    this.currentPage = link;
    this.toggleMenu();
  }

  renderLink(link) {
    const activeLink = this.currentPage === link ? "active" : "";
    return (
      <p
        onClick={(event) => this.changePage(event, link)}
        key={link}
        className={"sidebar-link " + activeLink}
      >
        {link}
      </p>
    );
  }

  renderSidebarLinks(){
    const links = [];

    for (let page of this.props.children) {
      links.push(this.renderLink(page.props.link));
    }

    return links;
  }

  renderCurrentPage(){
    for (let page of this.props.children) {
      if (this.currentPage === "index") {
        this.currentPage = page.props.link;
        return page;
      }
      if (this.currentPage === page.props.link) return page;
    }
  }

  toggleMenu() {
    if (this.menuState === "initial" || this.menuState === "closed") {
      this.menuState = "open";
    }
    else {
      this.menuState = "closed";
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="sidebar-wrapper">

        <Sidebar animationState={"sidebar-" + this.menuState}>
          {this.renderSidebarLinks()}
        </Sidebar>

        <div className={"main main-" + this.menuState}>
          <Header
            displayHamburger={true}
            hamburgerOnClick={this.toggleMenu.bind(this)}
          />
          {this.renderCurrentPage()}
          <Footer />
        </div>

      </div>
    );
  }
}

SidebarPage.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
};

export default SidebarPage;
