import { useNavigate } from "react-router-dom";
function PersonalInformation() {
    const show = localStorage.getItem("userInfo");
    const navigate = useNavigate();
    const convert = JSON.parse(show);
    return (
    <div>
        <h1>
            Personal Information
        </h1>
        <p>First Name : {convert.firstname}</p>
        <p>Last Name : {convert.lastname}</p>
        <p>Username : {convert.email}@gmail.com</p>
        <p>Birth Date : {convert.date}</p>
    <button onClick={() => {localStorage.clear(); navigate(-1);}}>Clear</button>
    </div>
    )
    
}
export default PersonalInformation