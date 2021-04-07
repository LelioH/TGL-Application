import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titles: {
    paddingHorizontal: 20,
    paddingVertical: 26,
  },
  recentGames: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#707070',
  },
  filtersTitle: {
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
  },
  typeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  betList: {
    marginHorizontal: 20,
    marginBottom: 26,
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
    height: 79,
    paddingVertical: 4,
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
});
