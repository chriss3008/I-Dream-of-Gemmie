// Assets
import ErrorImage from "../../assets/404ErrorPage.png"

// Routes
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";


// Code
const GemPage = () => {

    const navigate = useNavigate()


    return (
        <a>       
            <h1>Error Page</h1> 
             <img src={ErrorImage} onClick={() => goToHomePage(navigate)} />

        </a>
    )
}

export default GemPage
