import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Functional Component
const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Functional Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

// Class Component
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Class Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
      </View>
    );
  }
}

// Root Component
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Counter App!</Text>
      <FunctionalCounter />
      <ClassCounter />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eef',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counterContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
});
