import url from "../utils/constants";
import { useContext } from "react";
import UserData from "../utils/UserData";

const Card = (props) => {
    const { resData } = props;
    const { name, cuisines, delivery_time, price_for_two, image } = resData;
    const {loginuser}=useContext(UserData)

    return (
        <>
            <div className="card btn btn-secondary" style={{ width: "16.7rem", height: "500px", margin: "10px", display: "flex", flexDirection: "column" }}>
                {/* Image section */}
                <img
                    alt="..."
                    src={url + resData.cloudinaryImageId}
                    className="card-img-top"
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px"
                    }}
                />
                <div className="card-body" style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                    <h5 className="card-title" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        {name}
                    </h5>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Cuisines : {cuisines}
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Delivery Time : {delivery_time}
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Rating : {resData.avgRating}
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        {loginuser}
                    </p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Price for Two : ₹{resData.costForTwo}
                    </p>
                    <a href="#" className="btn btn-primary" style={{ background: "rgb(23, 188, 70)", marginTop: "auto" }}>
                        😋 Eat Me 😋
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;
