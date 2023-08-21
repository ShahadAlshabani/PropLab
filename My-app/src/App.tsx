
import './App.css'
import Programers from "./component1/Programers";
import Companies from './component2/Companies';

function App() {

  return (
    <>
     <h1>Programmers</h1>

      <div className='card'>
      <Programers name="John" languages="Arabic, English" experiences="coop trainee" company="unemployed"></Programers>
      <Programers name="Emma" languages="English, French" experiences="junior developer" company="XYZ Tech"></Programers>
      <Programers name="Ahmed" languages="Arabic, Spanish" experiences="freelance web developer" company="Self-Employed"></Programers>
      <Programers name="Sophia" languages="Arabic, English, German" experiences="software engineer" company="ABC Solutions"></Programers>
      <Programers name="David" languages="English, Mandarin" experiences="senior developer" company="TechCo Ltd"></Programers>
      </div>
      <h1>Companies</h1>
      <div className='card'>
      <Companies name="Amazon" numOfEmp="20000" yearEstablished="1995" serviceType={"E-commerce"} expectedPrices={"Competitive"}></Companies>
      <Companies name="Google" numOfEmp="150000" yearEstablished="1998" serviceType={"Internet Services"} expectedPrices={"Varies"}></Companies>
      <Companies name="Apple" numOfEmp="147000" yearEstablished="1976" serviceType={"Technology and Consumer Electronics"} expectedPrices={"Premium"}></Companies>
      <Companies name="Microsoft" numOfEmp="163000" yearEstablished="1975" serviceType={"Software and Cloud Services"} expectedPrices={"Varies"}></Companies>
      <Companies name="Facebook" numOfEmp="60654" yearEstablished="2004" serviceType={"Social Media and Advertising"} expectedPrices={"Free (ad-supported)"}></Companies>
      </div>
    </>
  )
}

export default App
