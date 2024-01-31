import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { fetchUsers } from "../data/usersData";
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card } from 'react-native-paper';


const Tab = createBottomTabNavigator();

export const Home = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setUsers(fetchUsers);
    }, []);



    return (
        <View style={styles.container}>
            <ScrollView>
                {users.map(user => (
                    <UserProfile key={user.id} user={user} />
                ))}
            </ScrollView>
        </View>
    );
};

const UserProfile = ({ user }) => {



    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Portfolio', { user })} >
            <View style={styles.profileContainer}>
                <Card style={styles.card}>
                    <Text style={styles.profileName}>{user.name}</Text>
                    <Image source={{ uri: user.img }} style={styles.profileImage} />
                    <Text style={styles.profileCountry}>{user.country}</Text>
                    <Text style={styles.profilePosts}>{user.photos.length} </Text>
                </Card>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({

    card: {
        width: '100%',
        height: 520,
        borderRadius: 0,
        marginTop: 7,
        marginBottom: 20,
        backgroundColor: '#f79fbe',
    },
    profileContainer: {
        marginBottom: 20,
    },
    profileImage: {
        width: 372,
        height: 380,
        marginTop: 16,
        borderRadius: 18,
        alignSelf: 'center',
    },
    profileName: {
        top: 15,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    profileCountry: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'semibold',
        marginLeft: 70,
    },
    profilePosts: {
        fontSize: 15,
        marginLeft: 300,
        marginTop: -20,
    },
});