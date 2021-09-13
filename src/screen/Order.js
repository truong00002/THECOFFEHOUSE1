import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';



const Data = [
  {
    id: '1',
    titleHeading: 'Combo 6 lon cafe sữa đá',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg',
    price: '336.000'
  },
  {
    id: '2',
    titleHeading: 'Cafe sữa hòa tan',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg',
    price: '422.000'
  },
  {
    id: '3',
    titleHeading: 'Cafe peak flavor -  hương thơm đỉnh cao',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/peak_196fc2433ab14ef297113696e4d6c179_large.jpg',
    price: '522.000'
  },
  {
    id: '4',
    titleHeading: 'Cafe rich finish - Gu đậm tinh tế',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/rich_327845e1f8374e21955320e3ea8e7263_large.jpg',
    price: '192.000'
  },
  {
    id: '5',
    titleHeading: 'Americano',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_large.jpg',
    price: '200.000'
  },
  {
    id: '6',
    titleHeading: 'Combo 6 lon cafe sữa đá',
    title: 'Ưu đãi 10% cho đơn hàng mua Cà phê gói - Cà phê uống liền...',
    image: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg',
    price: '312.000'
  },
];


const RenderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={{ flexDirection: 'row', margin: 15, justifyContent: 'space-between' }}>
        <View style={styles.content}>
          <Text style={styles.textHeading}>{item.titleHeading}</Text>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textPrice}>{item.price}</Text>
        </View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}
export default function Order() {
  const windowHeight = Dimensions.get('window').height;

  const titleListItem = () => {
    return (
      <View style={styles.content1}>
        <Text style={styles.textContent1}>Cà phê gói cà phê uống liền</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ height: windowHeight - 50 }}>
      <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#ffffff' }}>
        <View>
          <Image
            source={require('../Images/delivery.png')}
            style={{ height: 30, width: 30, marginHorizontal: 15, marginVertical: 5 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '500', marginTop: 5 }}>Giao đến</Text>
            <Fontisto name='angle-down' size={12} color='#7a7a7a'
              style={{ marginTop: 8, marginLeft: 5 }}
            />
          </View>
          <Text style={{ fontWeight: '400', color: '#7a7a7a' }}>Vân Canh, Hoài Đức, Hà Nội</Text>
        </View>
      </View>
      <View style={styles.Header}>
        <View style={styles.Option1}>
          <Text>Cà phê gói - Cà phê uống liền</Text>
          <Ionicons name='ios-chevron-down-sharp' size={20} color='#555' />
        </View>
        <Ionicons name='search' size={20} color='#555' style={styles.icon} />
        <Ionicons name='heart-outline' size={20} color='#555' style={styles.icon} />
      </View>
      <FlatList
        data={Data}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        style={{ marginBottom: 0 }}
        ListHeaderComponent={titleListItem}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  content1: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textContent1: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    padding: 7,
    borderRadius: 5,
    backgroundColor: '#d4d4d4'
  },
  Header: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingBottom: 15
  },
  Option1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#d4d4d4'
  },
  item: {
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15
  },
  content: {
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'space-between'
  },
  textHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textTitle: {
    fontSize: 15,
    color: '#555'
  },
  textPrice: {
    fontSize: 16,

  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
  },
});