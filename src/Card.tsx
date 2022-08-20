import {FC} from "react";
import {ImageBackground, Text, View, StyleSheet} from "react-native";
import {commonBorderStyle} from "./common/Styles";
import {CardType} from "../App";
import {FONTSIZEPrimary, FONTSIZESecondary, HEIGHT, MARGIN, PADDING, WIDTH} from "./common/variables";

type CardPropsType = {
    card: CardType
}
export const Card: FC<CardPropsType> = (props) => {
    const {grade, title, cardItemPrice, created, decKCover} = props.card

    return (
        <View style={[styles.card, commonBorderStyle(10)]}>
            <ImageBackground
                style={styles.deckCover}
                source={decKCover}
                borderRadius={10}
                resizeMode={"cover"}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>Price: {cardItemPrice}</Text>
                <Text style={styles.grade}>Grade: {grade}</Text>
                <Text style={styles.created}>{created}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: ((WIDTH - PADDING * 2) / 2) - 2,
        height: ((HEIGHT - PADDING * 2) / 4),
        marginVertical: MARGIN / 2,
        marginHorizontal: MARGIN / 2,
    },
    deckCover: {
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: PADDING / 3,
        paddingVertical:PADDING/3
    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: "#DDDDDD",
        alignSelf:"center",

    },
    price: {
        fontSize: FONTSIZESecondary,
        color: "#DDDDDD"
    },
    grade: {
        fontSize: FONTSIZESecondary,
        color: "#DDDDDD"
    },
    created:{
        color: "#DDDDDD"
    }

})