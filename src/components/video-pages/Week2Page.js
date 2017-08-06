import React from 'react';
import SidebarPage from '../SidebarPage';
import Week1 from './Week1';
import Week2 from './Week2';

export default class Week2Page extends React.Component {
  render() {
    return (
      <SidebarPage>
        <Week1 link="Week 1" />
        <Week2 link="Week 2"/>
      </SidebarPage>
    );
  }
}
