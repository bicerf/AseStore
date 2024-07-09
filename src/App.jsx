import React from "react";
import {Text,ScrollView,SafeAreaView,View,FlatList,StyleSheet, TextInput} from 'react-native';
import products_data from './products.json';
import ProductCard from "./components/ProductCard";


function App(){

  const renderProduct = ({item}) => <ProductCard product={item}/>;
  const keyProduct = (item, index) => item.id.toString();

  return(
    <SafeAreaView>     
      <FlatList
      ListHeaderComponent={()=>      
          <View>
            <Text style={styles.appTitle}>ASE STORE</Text>

            <TextInput
              style={styles.input}
              placeholder="Ara..."
              placeholderTextColor={"#778899"}
            />
            
          </View>  
        }
        data={products_data}
        renderItem={renderProduct}
        keyExtractor={keyProduct}
        numColumns={2}
      />
    
    </SafeAreaView>
  );
}


const styles =StyleSheet.create({
  appTitle:{
    color:"#9400d3",
    fontSize:25,
    fontWeight:"bold",
    margin:10
  },
  input: {
    height: 40,
    margin:10,
    padding: 10,
    borderRadius:10,
    backgroundColor:"rgb(224, 230, 235);",
  },
});

export default App;