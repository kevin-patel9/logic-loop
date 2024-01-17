import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaBirthdayCake, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import "./allUser.css";
import { getTime } from "../../components/getDate";

const AllUser = () => {
const [userData, setUserData] = useState([]);
const [loader, setLoader] = useState(false);

const getData = async () => {
    setLoader(true);
    
    const data = await axios.get("https://dummyjson.com/users");
    setUserData(data?.data?.users);

    setLoader(false);
};

useEffect(() => {
    getData();
}, []);

    const navigate = useNavigate();

    const handleCardClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    if (loader) return <h2 style={{ textAlign: "center" }}>Loading....</h2>;

return (
    <div className="cardContainer">
        <h1 className="headerText">Rails and React 2: A real use case</h1>
        <div className="allUserCards">
            {userData?.map(item => (
                <div 
                    key={item.id} 
                    className="userCardBox"
                    onClick={() => handleCardClick(item.id)}
                    >
                    <div
                        className="userHeaderBox"
                        style={{ 
                            background: item.gender === "male" ? 
                            "#5dade8" : "#fe8df9", 
                        }}
                    >
                        <img src={item.image} />
                        <h2>
                            {item.firstName} {item.lastName}
                        </h2>
                        <div style={{ color: "white" }} className="withIconContainer">
                            <FaMapMarkerAlt size={14} />
                            <p>{item.company.address.city}</p>
                        </div>
                        <div style={{ color: "white" }} className="withIconContainer">
                            <FaBirthdayCake size={14} />
                            <p>{getTime(item.birthDate)}</p>
                        </div>
                    </div>
                    <div className="userDescription">
                        <p>{item.userAgent}</p>
                    </div>
                    <div style={{ background: "#D8DCDF", padding: "24px" }}>
                        <div className="withIconContainer">
                            <FaPhone size={14} />
                            <p>{item.phone}</p>
                        </div>
                        <div className="withIconContainer">
                            <FaEnvelope size={14} />
                            <p>{item.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default AllUser;
