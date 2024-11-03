import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    group:{
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRightWidth: 3,
        borderRightColor: '#f4f5f6'
    },
    control:{
        flex: 1,
        padding: 16,
        fontSize: 16,
        
    },
    error:{
        fontSize: 14,
        color: '#dc1637'
    }
   
});