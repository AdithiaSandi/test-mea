const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#253237",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div className="logo-container">
        <a href="">
          <img
            src="https://www.komunitasmea.web.id/wp-content/uploads/2021/11/logo-rebrand-MEA-digital-marketing-o-3-300x75.png"
            alt="logo-mea"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </a>
      </div>
      <div
        className="profile-container"
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        <img
          src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/458191/dinameyer-bloodwork-2.jpg"
          alt="profile-picture"
          style={{ height: "50px", width: "50px", borderRadius: "25px" }}
        />
        <span style={{ color: "white" }}>Halo, Shotaro Osaki</span>
      </div>
    </header>
  );
};

export default Header;
