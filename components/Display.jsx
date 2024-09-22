import React from "react"
import getNum from "../utilities/getNum"

export default function Display({ currentCalc }) {
    console.log(currentCalc)
    
    const previousCalc = React.useRef()
    
    const { previousNum, currentNum, result } = currentCalc

    //used to join the arrays and display the result or currentNum or previousNum and by default "0"
    let numToDisplay = result.join("") || currentNum.join("") || previousNum.join("") || "0"
    
    //if the number is an array, it's a result and we need to join it to display it
    if (Array.isArray(numToDisplay)) {
        console.log('fired')
        numToDisplay = numToDisplay[0]
    }
    
    numToDisplay = numToDisplay.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") 
    
    // hat tip: https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators
    
    const numLength = numToDisplay.length
    
    const style = numLength > 7 ? {fontSize: calculateFontSize(numLength)} : null
    
    
    function calculateFontSize(numLength) {
        
        const excess = numLength - 6
        const calculatedSize = 50 - excess * 3.5
        const fontSize = calculatedSize > 18 ? calculatedSize : 18
        return `${fontSize}px`
    }


  return <div style={style} className="display">{numToDisplay}</div>
}
