import React from "react" ; 
import {Image, View , Text} from "react-native" ;






export default function HeaderProfile(){





    return(




        <View style={{flexDirection:'row' , height:250}} >

            <Image source={{uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height:100 , width:100 , borderRadius:100 , flex:1}} />

            <View style={{flexDirection:'row' , flex:3 , justifyContent:'space-around' , padding:15}}>
                <Text>76</Text>
                <Text>283</Text>
                <Text>432</Text>
            </View>



        </View>
    )
}