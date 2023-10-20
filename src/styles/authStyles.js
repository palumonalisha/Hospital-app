import {StyleSheet} from 'react-native'

const  authStyle = StyleSheet.create({
    container: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#545454',
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  
    loginButton: {
      width: '80%',
      height: 40,
      alignItems: 'center',
      backgroundColor: '#0079D0',
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 5,
    },
  
    loginButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  
    footer: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#545454',
      paddingTop: 8,
      align: 'left',
  
  
    }
  
  
    
  
  
  });

  export default authStyle;