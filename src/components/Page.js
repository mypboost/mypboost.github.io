import React from 'react';
import C1 from './Component1'

const Page = React.createClass({

  propTypes: {

  },
  getDefaultProps() {
    return {

    };
  },

  render(){
    return (
      <C1 />
    )
  }

})

// function Page() {
//   return <C1 />;
// }


export default Page;
