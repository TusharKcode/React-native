import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import { useEffect, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemeText from '../../../components/ThemeText'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemeCard from '../../../components/ThemeCard'
import Spacer from '../../../components/Spacer'

const BookDetails = () => {
    const [book, setBook] = useState(null)
    const { id } = useLocalSearchParams()
    const { fetchBooksById } = useBooks()

    useEffect(() => {
        async function loadBook() {
            const bookData = await fetchBooksById(id)
            setBook(bookData)
        }
        loadBook()
    }, [id])

    if (!book) {
        return(
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoader/>
            </ThemedView>
        )
    }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemeCard style={styles.card}>
        <ThemeText style={styles.title}>{book.title}</ThemeText>
        <ThemeText>Written By: {book.author}</ThemeText>
        <Spacer/>
        <ThemeText title={true}>Book Description: </ThemeText>
        <Spacer/>
        <ThemeText>{book.description}</ThemeText>
      </ThemeCard>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "stretch"
    },
    title:{
        fontSize: 21,
        marginVertical: 10,
    },
    card:{
        margin: 20
    }
})