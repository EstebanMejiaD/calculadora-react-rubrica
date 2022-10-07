import "./Display.css"

export default function Display ({value1, value2, oper}) {
  return(
      <div className="component-display">
      <div>
         
          {value1} {oper} {value2} 
          
          </div>
    </div>
  )
}
