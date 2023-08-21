
import Services from "./Services";

interface CompaniesProps {
    name:string; 
    numOfEmp:string;
    yearEstablished:string;
    serviceType:string;
    expectedPrices:string;

}    
function Companies(props : CompaniesProps) {
return (
 <> 
    <h1>{props.name}</h1>
    <p>{props.numOfEmp}</p>
     <p>{props.yearEstablished}</p>
    <Services serviceType={props.serviceType} expectedPrices={props.expectedPrices}/>

 </>

)
}

export default Companies