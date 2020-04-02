import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, ActivityIndicator , Dimensions} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const entireScreenHeight = Dimensions.get('window').height;
const rem = entireScreenHeight / 380;
const entireScreenWidth = Dimensions.get('window').width;
const wid = entireScreenWidth / 380;
export default class Mainpage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      hours_Counter:'00',
      startDisable: false,
      assetsLoaded: false,

    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
 
  onButtonStart = () => {
 if (!this.state.startDisable){
    let timer = setInterval(() => {
 
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter,
        coot = this.state.hours_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
      if (Number(this.state.minutes_Counter) == 59 && Number(this.state.seconds_Counter) == 59) {
        coot = (Number(this.state.hours_Counter) + 1).toString();
        count = '00';
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num,
        hours_Counter: coot.length == 1 ? '0' + coot : coot
      });
    }, 1000);
    this.setState({ timer });
 
    this.setState({startDisable : true})
  }

  else{
    clearInterval(this.state.timer);
    this.setState({startDisable : false})
    this.setState({
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      hours_Counter:'00'
    });
  }
}

static navigationOptions = { headerMode: 'none', gestureEnabled: false };

  render() {
    const Handbook = () => {
      WebBrowser.openBrowserAsync('https://www.cyberdriveillinois.com/publications/pdf_publications/dsd_a112.pdf');
      }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/login.png')} style={styles.image}>
        <View style = {{
      width: '85%',
      flex:2,
      justifyContent: 'center',

    }}>
      
      <TouchableOpacity
          onPress={this.onButtonStart}
          activeOpacity={0.6}
          style={{height: entireScreenWidth*0.85*616/1416,
            width: '100%', justifyContent:'center'}} 
           >
             <ImageBackground source={require('../assets/timer.png')} style = {{
          height: '100%',
          width: '100%',
          flex:1,
          justifyContent:'center',
          alignContent:'center'
          

  }}resizeMode="contain">
                 <Text style={styles.counterText}>{this.state.hours_Counter} : {this.state.minutes_Counter} : {this.state.seconds_Counter}</Text>

  </ImageBackground>
          </TouchableOpacity>
      </View>
      <View style = {{
      width: '100%',
      flex:2,
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <TouchableOpacity
        style={{    
        height: entireScreenWidth/2*0.9,
        flex:1}}
      >
        <Image source={require('../assets/logdrive.png')} style = {{
          height: '100%',
          width: '100%',
          flex:1
          

  }}resizeMode="contain"></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{    
        height: entireScreenWidth/2*0.9,
        flex:1}}
      >
        <Image source={require('../assets/pdrive.png')} style = {{
          height: '100%',
          width: '100%',
          flex:1
          

  }}resizeMode="contain"></Image>
      </TouchableOpacity>
    </View>
    <View style = {{
      width: '100%',
      flex:2,
      flexDirection: 'row',
      alignItems: ''
    }}>
      <TouchableOpacity
        style={{    
        height: entireScreenWidth/2*0.9,
        flex:1}}
      >
        <Image source={require('../assets/dash.png')} style = {{
          height: '100%',
          width: '100%',
          flex:1
          

  }}resizeMode="contain"></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{    
        height: entireScreenWidth/2*0.9,
        flex:1}}onPress={Handbook}
      >
        <Image source={require('../assets/handbook.png')} style = {{
          height: '100%',
          width: '100%',
          flex:1
          

  }}resizeMode="contain"></Image>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  
      </View>
      
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingTop:8,
    borderRadius:10,
    height:'60%',
    flex:2
  },
  buttonText:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  },
  counterText:{
    fontSize: entireScreenWidth*0.85*616/1416*0.3,textAlign: 'center',
    color: 'white',
    fontFamily: 'Nova',
  }
});
