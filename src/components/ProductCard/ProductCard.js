import React from "react";
import { View,Text,Image } from "react-native";
import styles from './ProductCard.style/';


const ProductCard = ({product}) =>{
    return(
        <View style={styles.container}>
            <View style = {styles.imageContainer}>
              <Image style={styles.image} source={{uri:product.imgURL}}/>

            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{product.title}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{product.price}</Text>
                {product.inStock === false && <Text style={styles.stock}>STOKTA YOK</Text>}

            </View>
            

        </View>
        
    );
}

// const ProductCard = (props.product) =>{
//     return(
//         <View style={styles.container}>
//             <Image style={styles.image} />
//             <View>
//                 <Text style={styles.title}></Text>
//                 <Text style={styles.price}></Text>
//                 <Text style={styles.stock}></Text>
//             </View>

            

//         </View>
//     );
// }

export default ProductCard;