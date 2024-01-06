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

  const convertComma = (str: string) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleButtonPress = (value: number | string) => {
    let operation = '';
    if (value === '=') {
      try {
        let tmp = input.replaceAll(',', '');
        operation = eval(convertSign(tmp)).toString();
      } catch (error) {
        setResult('Error');
      }
    }

    if (value === '=') {
      setResult(convertComma(operation));
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
      let tmp = input + value;
      tmp = tmp.replaceAll(',', '');

      setInput(convertComma(tmp));
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
      <View style={{flex: 1.2, backgroundColor: 'transparent', padding: 5}}>
        <TextInput
          style={[styles.input, {color: '#FFA7A7'}]}
          value={result}
          editable={false}
          placeholder="Result"
          placeholderTextColor="#888"
        />
      </View>
      <View style={{flex: 7, padding: 5}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.button}>{renderButton('C')}</View>
          <View style={styles.button}>{renderButton('↑')}</View>
          <View style={styles.button}>{renderButton('.')}</View>
          <View style={styles.button}>{renderButton('DEL')}</View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.button}>{renderButton('(')}</View>
          <View style={styles.button}>{renderButton(')')}</View>
          <View style={styles.button}>{renderButton('H')}</View>
          <View style={styles.button}>{renderButton('+')}</View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(7)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(8)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(9)}
          </View>
          <View style={styles.button}>{renderButton('-')}</View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(4)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(5)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(6)}
          </View>
          <View style={styles.button}>{renderButton('×')}</View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(1)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(2)}
          </View>
          <View style={StyleSheet.compose(styles.button, styles.numberButton)}>
            {renderButton(3)}
          </View>
          <View style={styles.button}>{renderButton('÷')}</View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={StyleSheet.compose(styles.button, styles.zeroButton)}>
            {renderButton(0)}
          </View>
          <View style={styles.button}>{renderButton('=')}</View>
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
    margin: 2,
    borderRadius: 5,
    backgroundColor: '#FFEE90',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  numberButton: {
    backgroundColor: '#FFFFB4',
  },
  zeroButton: {
    flex: 3,
    backgroundColor: '#FFFFB4',
  },
});

export default App;
