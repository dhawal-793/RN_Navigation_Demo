import { StyleSheet, Text, View } from 'react-native'

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#101010',
    }
})