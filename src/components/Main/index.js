import About from "../../pages/About"
import Contact from "../../pages/Contact"
import Projects from "../../pages/Projects"

export default function Main({page}){
    function renderSection(){
        if(page === 'projects'){
            return(<Projects/>)
        }else if(page ==='contact'){
            return (<Contact/>)
        }else{
            return (<About/>)
        }
    }
    return(
        <>{renderSection()}</>
    )
}