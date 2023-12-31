import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../../constants/measurements'
import { Searchbar } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;

const categoryArray = Array.from({ length:  6}, (v, i) => i);
const CategoryItem = categoryArray.map(({navigation}) => {
  console.log(navigation)
  return (
    <TouchableOpacity onPress={() => {
      this.props.navigation.navigate("ServiceDetail")}}>
      <View style={{width: horizontalScale(160), height: verticalScale(132), borderRadius: moderateScale(10), backgroundColor:'#EBECED', justifyContent:'center', alignItems:'center', marginHorizontal: 10, marginTop:10}}>
      <Image source={require('../../../assets/categoryimages/barber.png')} resizeMode='cover' style={{ height: verticalScale(60), width: horizontalScale(60), tintColor: '#153963' }}/>
      <Text style={{
        color: '#153963',
        marginTop: verticalScale(20),
      }}>Barber</Text>
    </View>
    </TouchableOpacity>
  )});

const HomeScreen = ({navigation}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex:1, flexDirection: "column", backgroundColor: '#fff', justifyContent:'flex-start'}}>

    <View style={{ flexDirection:'row', justifyContent:"space-around", marginTop: verticalScale(60), marginLeft: horizontalScale(0)}} >

    <View style={{flexDirection:"column",}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: moderateScale(17), fontFamily: 'Inter-Regular'}}>Welcome,</Text> 
        <Text style={{fontSize: moderateScale(17), fontFamily: 'Inter-Bold'}}> David Tenant</Text>
        </View>
        <View style={{width: 250}}>
        <Text style={{flexWrap:'wrap', fontSize: moderateScale(14.5), fontFamily: 'Inter-Light'}}>Which service do you want to use today?</Text>  
        </View>
    </View>

    <Image source={require('../../../assets/userImage.png')}/>

    </View>

    <Searchbar placeholder='Search...' onChangeText={onChangeSearch} value={searchQuery} style={{ backgroundColor: '#ededed', width: '92%', color: 'black', alignSelf: 'center', marginTop: verticalScale(20), }} placeholderTextColor={'#000'} cursorColor={'black'} iconColor={'black'} rippleColor={'black'} selectionColor={'white'} mode='bar' />

    <Text style={{
      marginLeft: horizontalScale(20),
      marginTop: verticalScale(20),
      fontSize: moderateScale(15),
      fontFamily: 'Inter-Bold',
    }}>Categories</Text>

    <ScrollView contentContainerStyle={{
      flexDirection: 'row',
      width: windowWidth,
      flexWrap:'wrap',
      justifyContent:'center',
    }}>
    <TouchableOpacity onPress={() => {
     navigation.navigate("ServiceDetail")}}>
      <View style={{width: horizontalScale(160), height: verticalScale(132), borderRadius: moderateScale(10), backgroundColor:'#EBECED', justifyContent:'center', alignItems:'center', marginHorizontal: 10, marginTop:10}}>
      <Image source={require('../../../assets/categoryimages/barber.png')} resizeMode='cover' style={{ height: verticalScale(60), width: horizontalScale(60), tintColor: '#153963' }}/>
      <Text style={{
        color: '#153963',
        marginTop: verticalScale(20),
      }}>Barber</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      navigation.navigate("ServiceDetail")}}>
      <View style={{width: horizontalScale(160), height: verticalScale(132), borderRadius: moderateScale(10), backgroundColor:'#EBECED', justifyContent:'center', alignItems:'center', marginHorizontal: 10, marginTop:10}}>
      <Image source={require('../../../assets/categoryimages/barber.png')} resizeMode='cover' style={{ height: verticalScale(60), width: horizontalScale(60), tintColor: '#153963' }}/>
      <Text style={{
        color: '#153963',
        marginTop: verticalScale(20),
      }}>Barber</Text>
    </View>
    </TouchableOpacity>
   {CategoryItem}   
   </ScrollView>

    </View>
  )
}

export default HomeScreen