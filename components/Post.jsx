import React from 'react' ; 
import { Image, View , Text } from 'react-native';
import Dots from "react-native-vector-icons/Entypo" ;
import greenland from "../assets/images/greenland.png" ;
import Hearto from "react-native-vector-icons/EvilIcons" ; 
import Comment from "react-native-vector-icons/EvilIcons"
import SendIcon from "react-native-vector-icons/EvilIcons";
import Bookmark from "react-native-vector-icons/FontAwesome";




export default function Post(props){



console.log(props)


    return(


        <View style={{marginVertical:15}}>

            <View style={{flexDirection:'row' , height:60  , alignItems:'center'}}>
                <Image style={{height:35 , width:35  , borderRadius:500 , borderWidth:1 , borderColor:'black' , marginHorizontal:10 }} source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                <Text style={{textAlignVertical:'center'}}>ahmada3mar</Text>
                <Dots style={{marginLeft:'auto' , marginRight:5}} name="dots-three-vertical" color="black" size={25} />

            </View>

            <Image style={{width: '100%' }} source={greenland} />


            <View style={{flexDirection:'row' , height:60 , padding:10}}>
                
                <Hearto name="heart" color="black" size={35}
                onPress={()=>props.navigation.navigate("Profile")}
                />
                <Comment name="comment" color="black" size={35} />
                <SendIcon name="sc-telegram" color="black" size={35} />
                <Bookmark style={{marginLeft:'auto'}} name="bookmark-o" color="black" size={25} />



            </View>
        </View>
    )
}