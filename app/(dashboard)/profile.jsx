import { StyleSheet, Text, View } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {

    const { logout, user } = useUser()

  return (
    <ThemedView style={styles.container} safe={true}>
        
        <ThemeText title={true} style={styles.heading}>
            {user.email}
        </ThemeText>

        <Spacer/>

        <ThemeText>Time to start reading some books.....</ThemeText>

        <ThemedButton onPress={logout}>
            <Text style={{color: "#f2f2f2"}}>Logout</Text>
        </ThemedButton>

    </ThemedView>
  )
}

export default Profile

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