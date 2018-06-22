import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  p: {
    fontFamily: 'american',
    color: '#AA8962',
    fontSize: 17,
  },
  h: {
    fontFamily: 'archive',
    color: 'white',
    fontSize: 20,
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
    borderWidth: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  redLine: {
    backgroundColor: '#CA474D', 
    marginBottom: 30,
    marginTop: 120, 
    marginRight: 220, 
    marginLeft: 50
  },
  red: {
    color: '#CA474D',
    fontSize: 50
  },
  white: {
    marginTop: 5,
    color: 'white'
  },
  bgRed: {
    backgroundColor: '#CA474D'
  },
  bgWhite: {
    color: 'white'
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#000000',
    borderRadius: 5,
    opacity: 0.3,
    width: 300,
    height: 70,
    margin: 8,
    padding: 20
  }
  

})

export default styles