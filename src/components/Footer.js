import React from 'react';
import '../style/footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <i className="fa fa-twitter" aria-hidden="true" />
        <i className="fa fa-facebook" aria-hidden="true" />
        <i className="fa fa-instagram" aria-hidden="true" />
        <i className="fa fa-envelope-o" aria-hidden="true" />
      </div>
    );
  }
}

export default Footer;

