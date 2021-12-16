import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import ProdCadastrar from './src/components/ProdCadastrar/Cadastrar';
import ProdAtualizar from './src/screens/Produto/Atualizar';
import ViewPhotos from './src/components/ImagePick/ViewPhotos';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ProdCadastrar" component={ProdCadastrar} />
                <Stack.Screen name="ProdAtualizar" component={ProdAtualizar} />
                <Stack.Screen name="ViewPhotos" component={ViewPhotos} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
