import React, {Component} from 'react';
import {AppRegistry, StyleSheet,FlatList, Text, View, Image,ScrollView,Platform,Linking,TouchableOpacity} from 'react-native';
import {Card,CardImage, CardTitle, CardContent, CardAction} from 'react-native-card-view';

import Icon from 'react-native-vector-icons/FontAwesome'; // 5.0.0
const plus=(<Icon name="plus-circle" size={80} color="orange" />);

import Modal from 'react-native-modal'; // 2.4.0

export default class Categories extends Component {

  state = {
    visibleModal: null,
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Hello!</Text>
      {this._renderButton('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );


  constructor(props) {
    super(props);
    this.state = {
      GridViewItems: [
        { "key": 1, "url": "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg", "title":"oil" },
        { "key": 2, "url": "https://images.pexels.com/photos/34950/pexels-photo.jpg" ,"title":"powder"},
        { "key": 3, "url": "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg", "title":"soap" },
        { "key": 4, "url": "https://images.pexels.com/photos/57406/greater-snow-goose-goose-snow-goose-wading-bird-57406.jpeg", "title":"shampoo" },
        { "key": 5, "url": "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg" , "title":"sweets"},
        { "key": 6, "url": "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg", "title":"curd" }
      ]
    }
  }

GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }


  static navigationOptions = {
    title:'Categories list',
    headerStyle: { backgroundColor: '#5f43a5' },
    headerTitleStyle: { color: '#ffffff' }
  }

  
  render() {
   // let images = this.state.data.map(function (item) {
      return (
       
        <ScrollView>
      <View>
         <Text style={styles.title}>Popular Selling </Text>
      
        <View style={styles.MainContainer}>

      <FlatList
       data={ this.state.GridViewItems }

         renderItem={({item}) =>
       <Card style={styles.GridViewBlockStyle}>
        <CardImage key={item.url}>
        <TouchableOpacity >
          <Image 
          style={styles.imagewrap}
          source={{uri: item.url}} 
        />
        </TouchableOpacity>
        </CardImage>
        <CardTitle  key={item.title}> 
          <View>{this._renderButton('items', () => this.setState({ visibleModal: 1 }))}</View>
        </CardTitle>

      </Card>
         }
         numColumns={2}

        />
         
        <Modal isVisible={this.state.visibleModal === 1}>
          {this._renderModalContent()}
        </Modal>

        <TouchableOpacity onPress={()=> alert('Add new products')}>
        {plus}
        </TouchableOpacity>
</View>
</View>
      </ScrollView> 
      );
   
    // return (
    //   <ScrollView>
    //   <View>
    //      <Text style={styles.title}>Popular Selling </Text>
    //      {images}
    //      {plus} 
    //   </View>
    //   </ScrollView> 
    // );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'wrap',
  backgroundColor: '#eee',
    
  },
  title: {
    paddingTop: 30,
    fontSize: 30,
    marginLeft:10,
    flexDirection:'row'   
  },
  image:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap:'wrap'
  },
  imagewrap: {
   // margin: 2,
    //padding: 20,
   // paddingVertical: 10,
    height: 150,
    width: 150
   // backgroundColor: '#fff',
  },
  MainContainer :{

    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    
    },
    
    GridViewBlockStyle: {
    
      //justifyContent: 'center',
      flex:1,
      textDecorationLine: 'underline'
     // alignItems: 'center',
      //height: 175,
      //margin: 5
     
    
    },
    GridViewInsideTextItemStyle: {
    
       color: '#fff',
       padding: 10,
       fontSize: 18,
       justifyContent: 'center',
       
     },
     modalContent: {
      backgroundColor: 'white',
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 2,
      // borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    button: {
      backgroundColor: 'silver',
      padding: 2,
      margin: 16,
      justifyContent: 'center',
      alignItems: 'center',
      // borderRadius: 2,
      // borderColor: 'rgba(0, 0, 0, 0.1)',
    },
});
AppRegistry.registerComponent('Categories',() => Categories); 