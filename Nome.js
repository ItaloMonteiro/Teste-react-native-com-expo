import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function Nome({navigation}) {
    const sair = () => {
        navigation.navigate("Imagem");
    } 
    return (
      <View style={styles.container}>
        <Text>Italo Monteiro</Text>
        <StatusBar style="auto" />
        <Button 
            title="Sair"
            onPress={() => sair()}
        />
      </View>
    );
    
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  