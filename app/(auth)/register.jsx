import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemeText from '../../components/ThemeText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register } = useUser()

    const handleSubmit = async () => {
        try {
            await register(email, password)
        } catch (error) {
            
        }
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemeText title={true} style={styles.title}>
                Register to an Account
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
                <Text style={{color:"#f2f2f2"}}>Register</Text>
            </ThemedButton>

            <Spacer height={100}/>
            <Link href='/login'>
                <ThemeText style={{textAlign: 'center'}}>
                    Login instead
                </ThemeText>
            </Link>
        </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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
    }
})