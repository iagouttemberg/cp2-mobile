import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen({navigation}) {
    const [formInputs, setFormInputs] = useState({email: '', password: ''})

    const changeEmail = (value) => {
        setFormInputs({...formInputs, email: value})
    }

    const changePassword = (value) => {
        setFormInputs({...formInputs, password: value})
    }

    const login = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formInputs.email, formInputs.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }   

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={formInputs.email}
                onChangeText={changeEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={formInputs.password}
                onChangeText={changePassword}
                secureTextEntry={true}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Login' onPress={login}/>
            <Button title='Sign Up' onPress={() => navigation.navigate('Sign up')}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textTransform: 'uppercase'
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      height: 40,
      marginVertical: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
      width: '60%',
    },
});

export default LoginScreen;