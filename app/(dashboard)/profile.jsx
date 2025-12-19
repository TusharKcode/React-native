import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
        <ThemeText title={true} style={styles.heading}>
            Your Email
        </ThemeText>

        <Spacer/>

        <ThemeText>Time to start reading some books.....</ThemeText>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center",
    },
})