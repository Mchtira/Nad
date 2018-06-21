import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  p: {
    fontFamily: 'american',
    color: '#AA8962',
    fontSize: 17,
    marginLeft: 50,
  },
  h: {
    fontFamily: 'archive',
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  txt: {
    fontFamily: 'archive'
  },
  wrapper: {
    marginLeft: 50
  },
  backgroundImage: {
      flex: 1,
  },
  btn: {
    flex: 1,
    justifyContent: 'flex-end', // centré verticalement 
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50
  },
  nadarName: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'archive',
    flex: 1,
    justifyContent: 'flex-end'
  },
  redBanner: {
    backgroundColor: '#CA474D',
    width: 280,
    height: 50,
    marginTop: 60,
  },
  bnfLogo: {
    marginTop: 20,
  },
  date: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'archive'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
  },
  blackBlock: {
    marginTop: 30,
    backgroundColor: 'black',
    marginRight: 50,
    height: 200,
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 5,
    borderWidth: 4
  },
  redLine: {
    backgroundColor: '#CA474D', 
    marginBottom: 30,
    marginTop: 220, 
    marginRight: 220, 
    marginLeft: 50
  }
})

export default styles