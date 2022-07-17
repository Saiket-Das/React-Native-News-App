import React, { useContext, useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { NewsContext } from '../API/Context'
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../Components/SingleNews';
// import { Pagination } from 'react-native-snap-carousel';

const windowHeight = Dimensions.get("window").height;



export default function NewsScreen() {

    const { news: { articles }
    } = useContext(NewsContext);

    const { activeIndex, setActiveIndex } = useState();
    console.log(activeIndex)

    console.log(articles);

    return (
        <View style={styles.carousel}>
            {articles && (
                <Carousel
                    // firstItem={articles.length - 1}
                    layout={"stack"}
                    data={articles.slice(0, 20)}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    renderItem={({ item, index }) => (
                        <SingleNews item={item} index={index} />
                    )}
                />
            )}
        </View>
    )
};



const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: 'gray',
        // transform: [{ scaleY: - 1 }]
    },
})