import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./single.css";
import { getTime } from "../../components/getDate";

const SingleCard = () => {
  const [data, setData] = useState({});
  const { id } = useParams(); // get id from url

  const getSingleData = async () => {
    const userData = await axios.get("https://dummyjson.com/users");
    // indexing start from 0 and id starts from 1
    setData(userData?.data?.users[id - 1]);
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    display: "block",
    border: data?.gender === "male" ? "6px solid #5dade8" : "6px solid #fe8df9",
  };

  const headerStyle = {
    textAlign: "center",
  };

  const labelStyle = {
    fontWeight: "bold",
  };

  // if user tries to access id that does not exist
  if (!data) 
    return <h2 style={{ textAlign: "center" }}>User with given id does not exist</h2>;

  return (
    <div className="containerStyle">
      <Link to="/">
        <span>Go To Home Page</span>
      </Link>
      <h1 style={headerStyle}>User Profile</h1>
      <div style={{ marginBottom: 10 }}>
        <img src={data?.image} style={imageStyle} />
        <h2 style={headerStyle}>
          {data?.firstName} {data?.lastName}
        </h2>
        <p><span style={labelStyle}>Username:</span> {data?.username}</p>
        <p><span style={labelStyle}>Email:</span> {data?.email}</p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={headerStyle}>Personal Information</h3>
        <p>
          <span style={labelStyle}>Gender:</span> {data?.gender}
        </p>
        <p>
          <span style={labelStyle}>Birth Date:</span> {getTime(data?.birthDate)}
        </p>
        <p>
          <span style={labelStyle}>Age:</span> {data?.age}
        </p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={headerStyle}>Contact Information</h3>
        <p>
          <span style={labelStyle}>Address:</span>{" "}
          {data?.company?.address?.city}, {data?.company?.address?.state},{" "}
          {data?.company?.address?.postalCode}
        </p>
        <p>
          <span style={labelStyle}>Phone:</span> {data?.phone}
        </p>
        <p>
          <span style={labelStyle}>Email:</span> {data?.email}
        </p>
      </div>
      <div style={{ marginBottom: 20 }}>
        <h3 style={headerStyle}>Financial Information</h3>
        <p>
          <span style={labelStyle}>Currency:</span> {data?.bank?.currency}
        </p>
        <p>
          <span style={labelStyle}>Card Type:</span> {data?.bank?.cardType}
        </p>
        <p>
          <span style={labelStyle}>Card Number:</span> {data?.bank?.cardNumber}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
