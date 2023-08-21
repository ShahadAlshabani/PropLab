interface ProgramersProps {
       name:string; 
       languages:string;
       experiences:string;
       company:string;

}    
function Programers(props : ProgramersProps) {
  return (
    <>
    <h1>name: {props.name}</h1>
    <p>languages: {props.languages}</p>
    <p>experiences: {props.experiences}</p>
    <p>company: {props.company}</p>
    </>

  )
}

export default Programers