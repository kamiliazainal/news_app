import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {Alert, View, ActivityIndicator, Text} from 'react-native';
import {getArticles} from '../../service/news';
import DataItem from '../../component/dataItem';
import Modal from '../../component/modal';

export default class Tab2 extends Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            data: null,
            setModalVisible: false,
            modalArticleData: {}
        }
    }

    handleItemDataOnPress = (articleData) => {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        });
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        });
    }

    componentDidMount(){
        getArticles('technology').then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        },
        error => {
            Alert.alert('Error', 'Something went wrong !');
        }
        )
    }

  render() {
      //console.log(this.state.data);

      let view = this.state.isLoading ? (
          <View>
              <ActivityIndicator animating={this.state.isLoading}/>
              <Text style={{marginTop: 10}}>Please wait...</Text>
          </View>
      ) : (
        <List
              dataArray={this.state.data}
              renderRow={(item) => {
                  return <DataItem data={item} onPress={this.handleItemDataOnPress}/>
              }}
          />
      )
    return (
      <Container>
        <Content>
          {view}
        </Content>
        <Modal
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}