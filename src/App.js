
import './App.css';
import Header from './Components/Header/Header'
import styled from 'styled-components';
import Sidebar from './Components/Sidebar/Sidebar';
import Feeds from './Components/Feeds/Feeds';
import Widgets from './Components/Widgets/Widgets'
import Login from './Components/Login/Login'
import { useStateValue } from './Components/Reducer/StateProvider';



function App() {

 const[{user}, dispatch] = useStateValue();


  return (
    
    <Container className="app">
      {
        !user? <Login/> : (<>
         <Header/>
     <Body>
       <Sidebar/>
       <Feeds/>
      <Widgets/>
  </Body>
        </> )
      }
    


    </Container>
  );
}

export default App;

const Container = styled.div`

`
const Body = styled.div`
display:flex;

`
const FeedsContainer = styled.div`

`
