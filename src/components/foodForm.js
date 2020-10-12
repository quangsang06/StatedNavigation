import React, {useState} from 'react';
import {   StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity } from 'react-native';


const useStyles =  makeStyles({
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#845cc3',
    }
})

const foodForm = props => {
    const {food} = props;
    const [food,setFood] = useStyles(null)
    return (
      <View style= {styles.container}>
          <Text style={styles.title}></Text>
          <TextInput style= {styles.foodInput} value= {food} placeholder="Name" onChangeText= {food => setFood(food)}/>
          <TouchableOpacity onPress={() => {props.add(food)}}>Submit</TouchableOpacity>
          <TouchableOpacity onPress={() => {props.navigations.navigate('FoodList')}}>
              <Text>Go to Food List</Text>
          </TouchableOpacity>
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        margin:'16rem',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 36,
        marginBottom: '50rem'
    },
    foodInput: {
        fontSize: '30px',
        marginBottom: '32rem',
        borderWidth: 1,
        padding: 8,
        width: '80%',
        borderRadius: 10
    }
})
export default foodForm;