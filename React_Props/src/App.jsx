// props = read only properties that are shared between component 
// parent component can send date to a child component
// <component key = value/>


import Student from "./Student.jsx"

function App() {

  return(
    <>
      <Student name = "Spongebob" age = {40} isStudent = {true}></Student>
      <Student name = "SquidWard" age = {22} isStudent = {false}></Student>
      <Student name = "PatricStar" age = {51} isStudent = {true}></Student>
      <Student name = "SandySquirel" age = {42} isStudent = {true}></Student>
      <Student ></Student>
    </>
  )
}

export default App
