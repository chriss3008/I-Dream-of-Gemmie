
// Router
import { goToGemPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";


// Code
const ProfilePage = () => {

    // States and Constants
    const navigate = useNavigate()  

    const onClickGem = () => {
        goToGemPage(navigate)
    }


    return (
        <a>       
            <h1>First profile page</h1>
            <p>At first, only one</p>    
            <button onClick={onClickGem}>Go to Gem</button>
            {/* <button onClick={() => goToGemPage(navigate)}>Go to Gem</button> */}

        </a>
    )
}

export default ProfilePage
