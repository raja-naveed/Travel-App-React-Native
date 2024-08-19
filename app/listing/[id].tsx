import Colors from '@/constants/Colors';
import ListingData from '@/data/destination.json';
import { ListingType } from '@/types/listingType';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const ListingDetails = () => {
    const { id } = useLocalSearchParams();

    const listing: ListingType = (ListingData as ListingType[]).find(
        (item) => item.id == id
    );

    if (!listing) {
        return null; // or display a loading indicator
    }
    return (
      <>
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <View style={styles.backbuttoncontainer}>
                  <Feather name="arrow-left" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.backbuttoncontainer}>
                  <Feather name="bookmark" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <View>
          <Image source={{ uri: listing.image }} style={styles.image} />
          <View style={styles.contentwrapper}>
            <Text style={styles.title}>{listing.name}</Text>
            <View style={styles.location}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.locationText}>{listing.location}</Text>
            </View>
            <View style={styles.highlightwrapper}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.highlighticon}>
                  <Ionicons name="time" size={24} color={Colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.highlightTxt}>Duration</Text>
                  <Text style={styles.highlightTxtValue}>
                    {listing.duration}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.highlighticon}>
                  <FontAwesome
                    name="users"
                    size={24}
                    color={Colors.primaryColor}
                  />
                </View>
                <View>
                  <Text style={styles.highlightTxt}>Person</Text>
                  <Text style={styles.highlightTxtValue}>
                    {listing.duration}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.highlighticon}>
                  <Ionicons name="star" size={24} color={Colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.highlightTxt}>Rating</Text>
                  <Text style={styles.highlightTxtValue}>{listing.rating}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.listingdetails}>{listing.description}</Text>
          </View>
        </View>
        <View style={styles.foooter}>
          <TouchableOpacity style={styles.foooterBookBtnTxt} onPress={() => {}}>
            <Text style={styles.foooterBtnTxt}>Book Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.foooterBtn} onPress={() => {}}>
            <Text style={styles.foooterBtnTxt}>{listing.price}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
}

export default ListingDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  backbuttoncontainer: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 10,
  },
  contentwrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 16,
  },

  highlightwrapper: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  highlighticon: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginRight: 5,
    borderRadius: 8,
  },
  highlightTxt: {
    fontSize: 16,
    color: "gray",
  },
  highlightTxtValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listingdetails: {
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0.5,
    color: Colors.black,
  },
  foooter: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: width,
    flexDirection: "row",
  },
  foooterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
  },
  foooterBtnTxt: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  foooterBookBtnTxt: {
    backgroundColor: Colors.primaryColor,
    padding: 20,
    flex: 2,
    borderRadius: 10,
  },
});
