import {
  Text,
  TextInput,
  View
} from 'react-native';

import Counter from '../components/counter';
import CounterActions from '../components/counter_actions';
import Greeting from '../components/greetings';
import { useHome } from '../hooks/useHome';
import { styles } from '../styles/home_style';

export default function HomeScreen() {
  const home = useHome();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Home Screen 🏠
      </Text>

      

      <Counter count={home.count} />
      <Text style={styles.counterType}>
  Counter Type: {home.counterType}
</Text>

      <CounterActions
        onIncrement={home.increment}
        onDecrement={home.decrement}
        onReset={home.reset}
        disabled={home.isNegativeLimitReached}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={home.name}
        onChangeText={home.setName}
      />

      <Greeting name={home.name} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: 'center',
//     backgroundColor: '#F8FAFC',
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 30,
//   },

//   input: {
//     backgroundColor: '#FFF',
//     borderWidth: 1,
//     borderColor: '#D1D5DB',
//     borderRadius: 12,
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//   },
//   counterType: {
//   textAlign: 'center',
//   fontSize: 18,
//   marginBottom: 20,
// },
// });