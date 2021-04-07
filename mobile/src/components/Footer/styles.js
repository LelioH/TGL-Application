import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');
const windowWidth = window.width;
const windowHeight = window.height;

export default StyleSheet.create({
  footer: {
    marginTop: 50,
    bottom: 0,
    width: windowWidth,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#707070',
  },
});
