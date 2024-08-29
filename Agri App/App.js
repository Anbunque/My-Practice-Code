import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [products, setProducts] = useState([]);

    const registerFarmer = () => {
        axios.post('http://localhost:3000/api/farmers/register', {
            name,
            email,
            password,
            location,
        })
        .then(response => {
            alert('Farmer registered successfully!');
        })
        .catch(error => {
            alert('Registration failed.');
        });
    };

    const getProducts = () => {
        axios.get('http://localhost:3000/api/products')
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            alert('Failed to fetch products.');
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Farmer</Text>
            <TextInput placeholder="Name" onChangeText={setName} style={styles.input} />
            <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
            <TextInput placeholder="Location" onChangeText={setLocation} style={styles.input} />
            <Button title="Register" onPress={registerFarmer} />

            <Button title="View Products" onPress={getProducts} />
            {products.map((product, index) => (
                <Text key={index}>{product.name} - {product.price}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default App;
