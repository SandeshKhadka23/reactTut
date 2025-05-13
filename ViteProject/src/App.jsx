
import Greet from "./components/greet";
import Header from "./components/header";
import{Footer} from "./components/footer";



function App() {
  

  return (
    <div>
    <Header header="Welcome to our website"/> 
    <Greet name="sandesh"/>
    <Greet name="RCB"/>
    <Footer footer="Thanks for visiting our website"/>
     {/* </> fomat */}
   <h1>Hello!!</h1>
</div>
  )
}

export default App;
