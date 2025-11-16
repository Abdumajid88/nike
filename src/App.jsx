import './App.css'
import Card from './Card/Card'

function App() {

  return (
  <>
<div className="cards">
    <Card  bgColor={"#CBCBCB"} btnColor={"#A5A5A5"}></Card>
  <Card bgColor ={ '#5CA7FF'} btnColor={"#FFC700"}></Card>
  <Card bgColor ={ '#D083FF'} btnColor={"##00FFB2"} ></Card>
  <Card bgColor ={ '##FF99E2'} btnColor={"##FFF500"}></Card>
  <Card bgColor ={ '##C5C1C7'} btnColor={"##00FFB2"}></Card>
  <Card bgColor ={ '##5CFF62'} btnColor={"##FFC700"}></Card>
</div>

  </>  
   )
}

export default App
