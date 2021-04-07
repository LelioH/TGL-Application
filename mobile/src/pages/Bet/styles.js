import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titles: {
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  newBetTitle: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#707070',
  },
  chooseTitle: {
    fontSize: 17,
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#868686',
    marginVertical: 15,
  },
  typeButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#0000ff',
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 23,
  },
  descriptionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#868686',
  },
  descriptionText: {
    fontSize: 14,
    color: '#868686',
  },
  ballSelectedContainer: {
    marginVertical: 13,
  },
  ballSelected: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ballSelectedNumber: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  gameButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gameButton: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#B5C401',
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  gameButtonText: {
    fontSize: 13,
    color: '#B5C401',
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#B5C401',
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  addToCartText: {
    marginLeft: 10,
    fontSize: 13,
    color: '#fff',
  },
  betBalls: {
    marginHorizontal: 20,
    marginBottom: 26,
  },
  balls: {
    width: 59,
    height: 59,
    borderRadius: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 9,
  },
  ballsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
