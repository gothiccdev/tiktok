import { 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';

export default function New() {
 return (
   <View style={styles.container}>
    <Text>Pagina Cadastro!</Text>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})