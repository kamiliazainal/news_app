import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
            <Title >News App</Title>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'white'}}>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} activeTextStyle={{color: 'white'}} textStyle={{color: 'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} activeTextStyle={{color: 'white'}} textStyle={{color: 'white'}} heading="Technology">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} activeTabStyle={{backgroundColor: '#009387'}} activeTextStyle={{color: 'white'}} textStyle={{color: 'white'}} heading="Entertainment">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009387'
  }
})