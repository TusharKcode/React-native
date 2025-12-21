import { TouchableWithoutFeedback, StyleSheet, Text, Keyboard } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemeText from '../../components/ThemeText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log("Login form submitted", email, password)
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                Login to Your Account
            </ThemeText>

            <ThemedTextInput 
                style={{ width: "80%", marginBottom: 20}}
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />

            <ThemedTextInput 
                style={{ width: "80%", marginBottom: 20}}
                placeholder='Password'
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <ThemedButton onPress={handleSubmit}>
                <Text style={{color:"#f2f2f2"}}>Login</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href='/register'>
                <ThemeText style={{textAlign: 'center'}}>
                    Register instead
                </ThemeText>
            </Link>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        textAlign:"center",
        fontSize:18,
        marginBottom:30
    },
    btn:{
        backgroundColor: Colors.primary,
        padding:15,
        borderRadius:5
    },
    pressed:{
        opacity:0.8,
    }
})