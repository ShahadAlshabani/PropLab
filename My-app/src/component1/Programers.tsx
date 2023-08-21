interface ProgramersProps {
       name:string; 
       languages:string;
       experiences:string;
       company:string;

}    
function Programers(props : ProgramersProps) {
  return (
    <>
    <h1>{props.name}</h1>
    <p>{props.languages}</p>
    <p>{props.experiences}</p>
    <p>{props.company}</p>
    </>

  )
}

export default Programers