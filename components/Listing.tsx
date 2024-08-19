import { FlatList, Image, ListRenderItem, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/types/listingType'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Props = {
  listings: any[]
  activeCategory: string
}

const Listing = ({ listings, activeCategory }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }
    , [activeCategory])

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild >
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.bookmark}>
              <Ionicons name="bookmark-outline" size={25} color={Colors.white} />
            </View>
            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail' >{item.name}</Text>
            <View style={styles.maincontainer}>
              <View style={styles.locationcontainer}>
                <Ionicons name="location" size={20} color={Colors.primaryColor} />
                <Text style={styles.itemlocationTxt}>{item.location}</Text>

              </View>
              <Text style={styles.itempriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    )
  }

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}

      />
    </View>
  )
}

export default Listing

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    width: 222,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30
  },
  bookmark: {
    position: 'absolute',
    right: 30,
    top: 185,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 10
  },
  locationcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  itemlocationTxt: {
    fontSize: 14,
    color: Colors.black,
    marginLeft: 5
  },
  itempriceTxt: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '700'
  },
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})