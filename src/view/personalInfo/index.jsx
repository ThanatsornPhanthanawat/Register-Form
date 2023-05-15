import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Input, Form, DatePicker, InputNumber, Typography, Checkbox, Button, Image } from "antd";
import './personalInfo.css'

function PersonalInformation() {
    const show = localStorage.getItem("userInfo");
    const navigate = useNavigate();
    const convert = JSON.parse(show);
        console.log(convert)
     const image = convert.image
    return (
    <div className="personalInfo-class" >
        <Card className="personalInfo-card">
        <Typography.Title
            level={1}
            style={{
              fontWeight: 300,
              marginTop: 10,
              marginBottom: 40,
            }}
          >
             Personal Information
          </Typography.Title>
          {image && <img src={`data:image/jpeg;base64,${image}`} style={{width:200 , height:200}}alt="Profile" />}
            <h2>First Name : {convert.firstname}</h2>
            <h2>Last Name : {convert.lastname}</h2>
            <h2>Username : {convert.email}</h2>
            <h2>Birth Date : {convert.date}</h2>
        <button className="btn-class" onClick={() => {localStorage.clear(); navigate(-1);}}>Clear</button>
        </Card>
    </div>
    )
    
}

export default PersonalInformation;
