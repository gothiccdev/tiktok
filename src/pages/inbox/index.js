import { 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';

export default function Inbox() {
 return (
   <View style={styles.container}>
    <Text>Pagina Inbox!</Text>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})