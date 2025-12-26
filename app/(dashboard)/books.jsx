import { FlatList, Pressable, StyleSheet } from 'react-native'
import {useBooks} from '../../hooks/useBooks'
import { Colors } from '../../constants/Colors'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import ThemedCard from '../../components/ThemeCard'
import { useRouter } from 'expo-router'

const Books = () => {
    const { books } = useBooks()
    const router = useRouter()

  return (
    <ThemedView style={styles.container} safe={true}>
        <Spacer/>
        <ThemeText title={true} style={styles.heading}>
            Your Reading List
        </ThemeText>
        <Spacer/>
        <FlatList
            data={books}
            keyExtractor={(item) => item.$id}
            contentContainerStyle={styles.list}
            renderItem={({item}) => (
                <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
                    <ThemedCard style={styles.card}>
                        <ThemeText style={styles.title}>{item.title}</ThemeText>
                        <ThemeText>Written By: {item.author}</ThemeText>
                    </ThemedCard>
                </Pressable>
            )}
        />
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
    list:{
        marginTop: 5,
    },
    card:{
        width: "90%",
        marginHorizontal: "5%",
        marginVertical: 10,
        padding: 10,
        paddingLeft: 14,
        borderLeftColor: Colors.primary,
        borderLeftWidth: 4
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
})