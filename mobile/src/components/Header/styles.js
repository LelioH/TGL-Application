import styled from 'styled-components'

export const Header = styled.View`
  paddingHorizontal: 20;
  paddingTop: 40;
  paddingBottom: 10;
  flexDirection: 'row';
  alignItems: 'center';
  justifyContent: 'space-between';
  backgroundColor: '#fff';
`




import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  logo: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    color: '#707070',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  headerUnderline: {
    width: 75,
    height: 6,
    backgroundColor: '#B5C401',
    borderRadius: 6,
    marginBottom: 10,
  },
  rigthHeader: {
    flexDirection: 'row',
  },
});
