import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Account from '../slider/pageone';
import ProfileDetails from '../slider/pagetwo';
import Education from '../slider/pagethree';
import Career from '../slider/pagefour';
import Skills from '../slider/pagefive';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: '#09115D'}} />
        <Tabs >
        <Tab heading="Account"  tabStyle={{backgroundColor: '#09115D'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#09115D'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Account />
          </Tab>
          <Tab heading="Profile" tabStyle={{backgroundColor: '#09115D'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '8790AF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <ProfileDetails />
          </Tab>
          <Tab heading="Degree" tabStyle={{backgroundColor: '#09115D'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '8790AF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Education />
          </Tab>
          <Tab heading="Career" tabStyle={{backgroundColor: '#09115D'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '8790AF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Career/>
          </Tab>
          <Tab heading="Skills" tabStyle={{backgroundColor: '#09115D'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '8790AF'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Skills/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}