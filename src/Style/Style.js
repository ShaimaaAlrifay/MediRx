import { StyleSheet } from "react-native";
import Colors from "../constsnt/Colors";

const Style = StyleSheet.create({
  Logo1: {
    display: 'flex',
    width: 60,
    height: 60,
    marginLeft: '14%',
  },
  Logo2: {
    display: 'flex',
    width: 247.63,
    height: 247.63,
    alignSelf: 'center',

  },
  headtitle: {
    color: Colors.black,
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'DM Sans',
    marginTop: '2%',
    marginLeft: '7%'
  },
  subtitle: {
    color: Colors.grey,
    fontFamily: 'DM Sans',
    fontSize: 14,
    fontWeight: '400',
    marginLeft: '8%'
  },
  Textinput: {
    display: 'flex',
    width: 346,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48,
    borderColor: Colors.lightgrey,
    borderWidth: 2,
    marginBottom: '5%',
    paddingHorizontal: '6%',
  },
  ButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    alignSelf: "center"
  },
  Button: {
    width: 342,
    height: 64,
    backgroundColor: Colors.darkblue,
    borderRadius: 48,
    paddingVertical: '5%',
  },
  title: {
    alignSelf: 'center', 
    fontSize: 30, 
    fontWeight: '800', 
    color: Colors.blue,
    marginBottom:'10%',
  },
  slogan: {
    color: Colors.darkgrey,
    alignContent:'center',
    textAlign: 'center',
    fontFamily: 'DM Sans',
    fontSize: 18,
    fontWeight:'700',
  }
});
export default Style;