import { StyleSheet, Text, Image } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemeLogo from '../components/ThemeLogo'
import Spacer from '../components/Spacer'
import ThemeText from '../components/ThemeText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo style={styles.img}/>
      <Spacer height={20}/>

      <ThemeText style={styles.title} title={true}>Home Page</ThemeText>

      <Spacer height={10}/>
      <ThemeText>Reading List App</ThemeText>
      <Spacer/>

      <Link 
        href="/login"
        style={styles.link}  
      >
        <ThemeText>Login Page</ThemeText>
      </Link>
      <Link 
        href="/register"
        style={styles.link}  
      >
        <ThemeText>Register Page</ThemeText>
      </Link>
      <Link 
        href="/profile"
        style={styles.link}  
      >
        <ThemeText>Profile Page</ThemeText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    fontWeight:"bold",
    fontSize: 18,
  },
  img:{
    marginVertical:20,
    height:150,
    width:150,
  },
  link:{
    marginVertical:10,
    borderBottomWidth:1,
  },
})