import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const windowWidth = window.width;
const windowHeight = window.height;

export default StyleSheet.create({
  container: {
    height: windowHeight,
    marginTop: 60,
    alignItems: 'center',
  },
  tglTitle: {
    fontSize: 44,
    color: '#707070',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  tglUnderline: {
    width: 107,
    height: 7,
    backgroundColor: '#B5C401',
    borderRadius: 6,
    marginBottom: 46,
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 35,
    fontWeight: '700',
    color: '#707070',
    fontStyle: 'italic',
  },
  form: {
    marginTop: 26,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 14,
    width: windowWidth - 70,
  },
  inputBorder: {
    borderBottomWidth: 2,
    borderColor: '#ebebeb',
  },
  inputForm: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontStyle: 'italic',
    padding: 20,
  },
  forgotText: {
    marginTop: 24,
    marginBottom: 25,
    marginLeft: 178,
    fontSize: 14,
    color: '#c1c1c1',
  },
  success: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 76,
  },
  successText: {
    color: '#b5c401',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginRight: 10,
  },
  invalid: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  invalidText: {
    color: '#707070',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10,
  },
  errorFormik: {
    fontSize: 18,
    color: "#ff0000",
    width: "100%",
    textAlign: "center",
    marginBottom: -10,
  }
});
