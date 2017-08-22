import React from 'react';
import SidebarPage from '../SidebarPage';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';

export default class Week3Page extends React.Component {
  render() {
    return (
      <SidebarPage>
        <Week3 link="Week 3" />
        <Week2 link="Week 2" />
        <Week1 link="Week 1" />
      </SidebarPage>
    );
  }
}
