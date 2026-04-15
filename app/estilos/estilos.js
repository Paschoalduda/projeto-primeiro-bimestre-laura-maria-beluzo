import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    ViewGeral: {
      container: {
          padding: 20,
          backgroundColor: "#f2f2f2"
        },
      
        card: {
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
      
        
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
      
        
          elevation: 5
        },
      
        avatar: {
          width: 140,
          height: 140,
          borderRadius: 70,
          alignSelf: "center",
          marginBottom: 10
        },
      
        titulo: {
          fontSize: 26,
          fontWeight: "bold",
          textAlign: "center",
          color: "#333"
        },
      
        label: {
          marginTop: 10,
          fontSize: 14,
          color: "#888"
        },
      
        valor: {
          fontSize: 16,
          color: "#333",
          marginBottom: 5
        },
      
        input: {
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 12,
          borderRadius: 8,
          marginBottom: 10,
          backgroundColor: "#fafafa"
        },
      
        botao: {
          marginTop: 15,
          backgroundColor: "#4CAF50",
          padding: 12,
          borderRadius: 8,
          alignItems: "center"
        },
      
        botaoTexto: {
          color: "#fff",
          fontWeight: "bold"
        }
    }
    
  });