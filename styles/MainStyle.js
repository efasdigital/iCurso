import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#191919',
    },
    containerLogo:{
      flex:1,
      justifyContent: 'center',
      marginTop: -30,
    },
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 50,
    },
    input:{
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom:15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
      maxWidth: 350,
      textAlignVertical: 'top'
    },
    btnSubmit:{
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },
    submitText:{
      color: '#FFF',
      fontSize: 18,
    },
    btnRegister:{
      marginTop: 10,
    },
    registerText:{
      color: '#FFF',
    },
    textTitleSupport:{
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 15,
    },
    textSubSupport:{
      color: '#000',
      fontSize: 16,
      textAlign: 'center',
      padding:30,
    },
    textFooterSupport:{
      color: '#FFF',
      backgroundColor: '#f55d5d',
      fontSize: 16,
      textAlign: 'center',
      padding:30,
    },
    avoindingView:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSupport:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
    },
    containerImageEbook:{
      justifyContent: 'center',
      marginTop:15,
      marginBottom:15,
    },
    containerImageGrupo:{
      justifyContent: 'center',
      marginBottom:15,
    },
    link:{
      marginTop:25,
    },
    textTitleBonus:{
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 15,
    },
    textLinkBonus:{
      color: '#2b2be3',
      fontSize: 15,
      textAlign: 'center',
      paddingTop: 15,
    },
    alertBonus:{
      backgroundColor: '#ffb700',
      width: '90%',
      borderRadius: 7,
      alignItems: 'center',
      color: '#2b2be3',
      fontSize: 15,
      textAlign: 'center',
      padding: 15,
      marginTop: 15,
    },
    alerttextTitleBonus:{
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    alerttextBonus:{
      color: '#000',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default styles