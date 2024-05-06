import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function LoginScreen({navigation}) {
    const [formInputs, setFormInputs] = useState({email: '', password: ''})

    const changeEmail = (value) => {
        setFormInputs({...formInputs, email: value})
    }

    const changePassword = (value) => {
        setFormInputs({...formInputs, password: value})
    }

    const signUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, formInputs.email, formInputs.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
        });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.formContainer}>
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
            <Button title='Sign Up' onPress={signUp}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#fff', // background color
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textTransform: 'uppercase',
    },
    formContainer: {
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
      width: '20%',
    },
});

export default LoginScreen;