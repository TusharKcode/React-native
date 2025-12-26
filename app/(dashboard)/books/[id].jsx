import { StyleSheet } from 'react-native'
import ThemedView from '../../../components/ThemedView'
import ThemeText from '../../../components/ThemeText'
import { useLocalSearchParams } from 'expo-router'


const BookDetails = () => {
    const { id } = useLocalSearchParams()
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemeText>Book Details - {id}</ThemeText>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "stretch"
    },

})