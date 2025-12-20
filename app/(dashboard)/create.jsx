import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'

const Create = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
        <ThemeText title={true} style={styles.heading}>
            Add a new Book
        </ThemeText>

        <Spacer/>
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
    },
})