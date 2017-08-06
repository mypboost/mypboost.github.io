import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Page from './Page';
import '../style/video-page.scss';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage = "index";
  }

  youtubeUrl(id) {
    return "https://www.youtube.com/embed/" + id + "?ecver=1?modestbranding=1&autohide=1&showinfo=0&controls=1";
  }

  changePage(event, selectedPage) {
    event.preventDefault();
    this.currentPage = selectedPage;
    this.forceUpdate()
  }

  renderIcon(name, imagePath, className) {
    return ( 
      <div key={name} className="icon">
        <p className={"title " + className}> {name} </p>
        <img 
          src={imagePath}
          onClick={(event) => this.changePage(event, name)} 
        />
      </div>
    )
  }

  renderIcons() {
    return this.props.data.reduce((reduction, values, key) => {
      const imagePath = values.get("imagePath");
      const className = values.get("class");
      reduction.push(this.renderIcon(key, imagePath, className));
      return reduction;
    }, []);
  }

  renderIndex() {
    return (
      <div className="video-index-wrapper">
        <h2 className="large-header">{this.props.title}</h2>
        {this.props.firstSection}
        {this.renderIcons()}
        {this.props.secondSection}
      </div>
    )
  }

  renderVideo() {
    const currentVideo = this.props.data.get(this.currentPage);
    const className = currentVideo.get('class');
    const videoLink = currentVideo.get('videoLink');
    const info = currentVideo.get('info').toJS();
    return (
      <div className={"video-wrapper " + className}>
        <button
          className="white-button"
          onClick={(event) => this.changePage(event, "index")}
        >
          {"< Return to Videos"}
        </button>

        <h2 className="large-header">{this.props.title}</h2>
        <h3 className={"video-header " + className}>{this.currentPage}</h3>

        <div className="videoWrapper">
          <iframe
            width="100%"
            src={this.youtubeUrl(videoLink)}
            frameBorder="0"
            allowFullScreen="" />
        </div>
        {info}
      </div>
    )
  }


  renderPage(){
    if (this.currentPage === "index") {
      return this.renderIndex();
    }
    return this.renderVideo();
  }

  render() {
    return (
      <Page className="video-page">
        {this.renderPage()}
      </Page>
    );
  }
}

VideoPage.propTypes = {
  data: PropTypes.instanceOf(Immutable.Map).isRequired,
  title: PropTypes.string.isRequired,
  firstSection: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
  secondSection: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
  ]),
};

export default VideoPage;
