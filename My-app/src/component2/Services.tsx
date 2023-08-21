interface ServicesProps {
    serviceType:string;
    expectedPrices:string;

}    
function Services(props : ServicesProps) {
return (
 <>
    <p>service Type: {props.serviceType}</p>
    <p>expected Prices: {props.expectedPrices}</p>
 </>

)
}

export default Services





   

