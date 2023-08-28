import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CourseCard = ({ detail }) => {
  const navigate = useNavigate();
  const handleLanjut = () => {
    localStorage.setItem("mea-course", JSON.stringify(detail));
    navigate("/learning");
  };
  return (
    <div
      className="card-container"
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "white",
        marginTop: "2rem",
        color: "white",
        borderRadius: "5px",
      }}
    >
      <div
        className="card-banner"
        style={{
          backgroundImage: `url(${detail.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "35%",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#CAAA81",
            borderRadius: "20px",
            width: "30px",
            height: "30px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
        >
          {detail.type}
        </div>
        <div
          style={{
            backgroundColor: "#496559",
            width: "150px",
            height: "30px",
            borderRadius: "7px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "1rem",
          }}
        >
          {detail.type === 1 ? "Premium" : detail.type === 2 ? "Basic" : "Free"}
        </div>
      </div>
      <div className="card-details" style={{ fontSize: "20px", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ margin: "0", color: "darkgreen" }}>
          <b>{detail.title}</b>
        </p>
        <div
          className="instructor-container"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            src={detail.instructors[0].photo}
            alt="instructor-picture"
            style={{ height: "40px", width: "40px", borderRadius: "20px" }}
          />
          <div
            className="instructor-details"
            style={{
              color: "darkgreen",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{fontSize: "17px"}}>{detail.instructors[0].name}</span>
            <span style={{fontSize: "15px"}}>{detail.instructor_role}</span>
          </div>
        </div>
        <button onClick={() => handleLanjut()} style={{border: "none", backgroundColor: "orangered", color: "white", padding: "15px", borderRadius: "10px"}}>Lanjut</button>
      </div>
    </div>
  );
};

export default CourseCard;
