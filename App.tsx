/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const convertSign = (value: string) => {
    value = value.replaceAll('×', '*');
    value = value.replaceAll('÷', '/');
    return value;
  };

  const handleButtonPress = (value: number | string) => {
    let operation = '';
    if (value === '=' || value === '%') {
      try {
        operation = eval(convertSign(input)).toString();
      } catch (error) {
        setResult('Error');
      }
    }

    if (value === '=') {
      setResult(operation);
    } else if (value === '%') {
      setResult(((Number(operation) * 1.0) / 100.0).toFixed(2).toString());
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === 'DEL') {
      setInput(prevInput => prevInput.slice(0, prevInput.length - 1));
    } else if (value === '↑') {
      setInput(result);
      setResult('');
    } else if (value === 'H') {
      //
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  const renderButton = (value: number | string, style = {}) => (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', width: '100%'}}
      onPress={() => handleButtonPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1.2, backgroundColor: 'transparent', padding: 5}}>
        <TextInput
          style={styles.input}
          value={input}
          editable={false}
          placeholder="0"
          placeholderTextColor="#888"
        />
      </View>
      <View style={{flex: 1.2, backgroundColor: 'transparentew', padding: 5}}>
        <TextInput
          style={[styles.input, {color: '#2E64FE'}]}
          value={result}
          editable={false}
          placeholder="Result"
          placeholderTextColor="#888"
        />
      </View>
      <View style={{flex: 7, padding: 5}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('C')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('%')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('.')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('DEL')}
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('(')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton(')')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('H')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('+')}
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(7)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(8)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(9)}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('-')}
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(4)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(5)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(6)}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('×')}
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(1)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(2)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(3)}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('÷')}
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('↑')}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton(0)}
          </View>
          <View style={Object.assign({}, styles.button, styles.numberButton)}>
            {renderButton('00')}
          </View>
          <View style={Object.assign({}, styles.button, styles.stringButton)}>
            {renderButton('=')}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    padding: 7,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0cfe1c',
    margin: 2,
    borderRadius: 33,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stringButton: {
    backgroundColor: '#90ffb8',
  },
  numberButton: {
    backgroundColor: '#26ff00',
  },
});

export default App;
