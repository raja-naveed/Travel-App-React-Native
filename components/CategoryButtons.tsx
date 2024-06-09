import Colors from '@/constants/Colors';
import categories from '@/data/categories';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

const CategoryButtons = () => {
    const scrollRef = useRef<ScrollView>(null);
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index];
        setActiveIndex(index);

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
        });
    };

    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 20, paddingVertical: 10, marginBottom: 10 }}
            >
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        ref={el => itemRef.current[index] = el}
                        onPress={() => handleSelectCategory(index)}
                        style={activeIndex === index ? styles.categoryButtonActive : styles.categoryButton}
                    >
                        <MaterialCommunityIcons
                            name={category.iconName}
                            size={20}
                            color={activeIndex === index ? Colors.white : Colors.black}
                        />
                        <Text style={activeIndex === index ? styles.categoryBtnTxtActive : styles.categoryBtnTxt}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default CategoryButtons;

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginVertical: 10,
    },
    categoryButton: {
        backgroundColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryButtonActive: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    categoryBtnTxt: {
        marginLeft: 10,
        fontWeight: '600',
    },
    categoryBtnTxtActive: {
        marginLeft: 10,
        fontWeight: '600',
        color: Colors.white,
    },
});
