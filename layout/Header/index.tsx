import StyleText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { View, Text, StyleSheet } from "react-native"

const Header = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.headerMainContainer}>
                <StyleText>ToDo App</StyleText>
                <StyleText>11 August</StyleText>
            </View>
            <StyleText>Complited: 0 / 0</StyleText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingBottom: 15,
        paddingHorizontal:20,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    },
    headerMainContainer: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
});


export default Header;