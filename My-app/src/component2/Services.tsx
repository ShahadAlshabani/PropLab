interface ServicesProps {
    serviceType:string;
    expectedPrices:string;

}    
function Services(props : ServicesProps) {
return (
 <>
    <p>{props.serviceType}</p>
    <p>{props.expectedPrices}</p>
 </>

)
}

export default Services





   

