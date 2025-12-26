import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import { useEffect, useState } from 'react'
import { Colors } from '../../../constants/Colors'
import ThemedView from '../../../components/ThemedView'
import ThemeText from '../../../components/ThemeText'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemeCard from '../../../components/ThemeCard'
import ThemedButton from '../../../components/ThemedButton'
import Spacer from '../../../components/Spacer'

const BookDetails = () => {
    const [book, setBook] = useState(null)
    const { id } = useLocalSearchParams()
    const { fetchBooksById, deleteBook } = useBooks()
    const router = useRouter()

    const handleBookDelete = async() => {
        await deleteBook(id)
        setBook(null)
        router.replace('/books')
    }

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
      <ThemedButton style={styles.delete} onPress={handleBookDelete}>
        <Text style={{color:"#fff", textAlign:"center"}}>
            Delete Book
        </Text>
      </ThemedButton>
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
    },
    delete:{
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: "center"
    }
})