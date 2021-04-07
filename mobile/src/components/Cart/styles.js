import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 28,
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 50,
  },
  cartTitle: {
    fontSize: 22,
    color: '#707070',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
    marginLeft: 8,
  },
  bets: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  sideLine: {
    width: 6,
    height: 79,
    borderRadius: 100,
  },
  betInfo: {
    width: '70%',
    height: 79,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  betNumbers: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5d5d5d',
  },
  betDate: {
    fontSize: 12,
    color: '#868686',
  },
  betType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  betTrash: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  empty: {
    paddingVertical: 120,
    paddingHorizontal: 20,
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#707070',
    alignContent: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#ebebeb',
    width: '115%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 30,
    marginLeft: -28,
  },
  saveButtonText: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#b5c401',
    marginRight: 15,
  },
  cartTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#707070',
  },
});
