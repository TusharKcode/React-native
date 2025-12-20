import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
        <ThemeText title={true} style={styles.heading}>
            Your Reading List
        </ThemeText>

        <Spacer/>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"stretch",
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
    },
})