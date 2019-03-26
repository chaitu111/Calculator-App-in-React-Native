import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {

constructor()
{
  super()
  this.state={

    resultstext:"",
    calculationText:""
  }
  this.operations=['D','+','-','/','*']
}

//Result Calculate
calculateResult()
{
  
const text=this.state.resultstext

this.setState({
  calculationText:eval(text)
})
}

//validation
validate()
  {
    const text=this.state.resultstext
    switch(text.slice(-1))
    {
      case '+':
      case '-':
      case '*':
      case '/':
      return false
    }
  }


//perform action on button
buttonPressed(text)
{

  if(text=="=")
  {
    
    return  this.calculateResult()
  }
  this.setState({

    resultstext:this.state.resultstext+text
  })
}


//switch case 
operate(operation)
{
switch(operation)
{
  //delete last text
  case 'D':
  let text=this.state.resultstext.split('')
  text.pop()
  this.setState({
    resultstext:text.join('')
  })
  break;


  case '+':   case '-':   case '*':   case '/':

   const lastch=this.state.resultstext.split('').pop()

   if(this.operations.indexOf(lastch) > 0)
   return
     if(this.state.text=="" )
 
        return
        this.setState({
          resultstext:this.state.resultstext +operation
        })
}
}

  render() {
    return (
      <View style={styles.container}>
     
        <View style={styles.results}>
          <Text style={styles.resultstext}>{this.state.resultstext}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationtext}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.number}>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonPressed(1)} style={styles.btn}>
                <Text style={styles.textbtn}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(2)} style={styles.btn}>
                <Text style={styles.textbtn}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(3)} style={styles.btn}>
                <Text style={styles.textbtn}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity  onPress={()=>this.buttonPressed(4)} style={styles.btn}>
                <Text style={styles.textbtn}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(5)} style={styles.btn}>
                <Text style={styles.textbtn}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(6)} style={styles.btn}>
                <Text style={styles.textbtn}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity  onPress={()=>this.buttonPressed(7)} style={styles.btn}>
                <Text style={styles.textbtn}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.buttonPressed(8)} style={styles.btn}>
                <Text style={styles.textbtn}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(9)}  style={styles.btn}>
                <Text style={styles.textbtn}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity onPress={()=>this.buttonPressed(".")} style={styles.btn}>
                <Text style={styles.textbtn}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed(0)}  style={styles.btn}>
                <Text style={styles.textbtn}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.buttonPressed("=")} style={styles.btn}>
                <Text style={styles.textbtn}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations} >
          <TouchableOpacity  onPress={()=>this.operate("D")} style={styles.btn}>
                <Text style={styles.textbtn}>Del</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>this.operate("+")} style={styles.btn}>
                <Text style={styles.textbtn}>+</Text>
              </TouchableOpacity>
           <TouchableOpacity onPress={()=>this.operate("-")}  style={styles.btn}>
                <Text style={styles.textbtn}>-</Text>
              </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.operate("*")} style={styles.btn}>
                <Text style={styles.textbtn}>*</Text>
              </TouchableOpacity>
               <TouchableOpacity onPress={()=>this.operate("/")}  style={styles.btn}>
                <Text style={styles.textbtn}>/</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#487EB0',

  },
  results: {
    marginTop:20,
    flex: 2,
    backgroundColor: 'white',
    justifyContent:'center'

  },
  resultstext: {
  
    color:'#192A56',
    fontSize: 30,
    alignSelf:'flex-end'
    
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
  },
  calculationtext: {
  
    color: 'white',
    fontSize: 30,
    alignSelf:'flex-end'
    
  },
  textbtn: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    
    flexDirection: 'row',
    padding:15,
    flex:1,
    justifyContent: 'space-around',
    alignItems:'center'
   
  },
  
  calculation: {
    flex: 1,
    backgroundColor: '#192A56',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  number: {
    flex: 8,
    backgroundColor: 'black',
  },
  operations: {

    flex: 2,
    backgroundColor: 'blue',
    padding:10
    
  },
});
