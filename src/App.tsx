
import ListGroup from './components/ListGroup'
import Alert from './components/Alert';

function App() {
  let items = ["Tokyo", "Venice", "London", "Kuala Lumpur"];
  const handleSelectItem = (item:string) => {
    console.log(item);
  }
  return (
    <>
     <ListGroup items = {items} heading='Cities' onSelectItem={handleSelectItem}/>
     <Alert>Hello <span>Hakim's </span> World</Alert>
    </>
  )
}

export default App