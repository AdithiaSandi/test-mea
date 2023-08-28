import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const options = {
    method: "POST",
    headers: {
      cookie:
        "mea_access_token=MTY5Mjc1NzI5OHxPOFY0STFsUS00elRkdmUyN1BsdERENXlUMk9heW4takRuSVljamVXWnNFeW9Hd01BZWxQWVMyVUFmZTJPV2l6bTEzUWhVNU84R1V6WldkN3VqdTRfTlU3OFdqZFg1MXk5STVqczBTajJZbkUtUXhhSEF4UDl5czZfNWEzY0ZBaW05RHRYNjE2MmhnbWlNY1B3OTFYNDV4U3F0WnI3M2oxRkgtN0ZlMUFFSVE3al94dndDMExIVm5Id21nR0kzRVN1VU55alp4SzJLSDM5SmlfeTdyOFJ0MEFLNW1idHdpRDljQ1Vtem03d3JJSUVHZEU2a1gxeFpuZVFsN1Z4Ym9lTHVHa09MYz18RzPRwUoOurwSbEtjrxkjPh0gs6lx4axBPllTA748WN8%3D; mea_refresh_token=MTY5Mjc1NzI5OHwtTk5DdmhORVU4UldIWW52a2RiV01OXzNLaUJITlh5eHA4clBLdEVDV25aQ05YRnZWNW94VVNKd0VoVWNzZmJYV0JFTnlfUF9kdWozcHdmM3JGSXB3MDRwRlJZRFNQY1hMZHBXcGN5eGdlUlg3bnk5SUN0eDdNSzZWd0QzaFUtbjhlbmZ4VENBbjVMeUNET0hIZExVV0FFenp2OUE0b0NxNEdvbi1ZRDUzZ29jM2N4NUZaZEJEbm5PZTl2anJld1Q0clJTaHNXUERkSnlKbkhRdEVScGVCNWpwSXA1NGhxZUppVkNKeTNaY0FVOTE5aVJ3bkdlMVRqV1M4Nkw1SV9MU1hOcWNOVT18oTdA8fR-erqLWIACA1LnGX0fZDvJtSsCzPnqDulf5jQ%3D; mea_device_id=BXW2XZ5FR5HZFRRQ533Z",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    credentials: "include",
    body: new URLSearchParams({ email: email, password: password }),
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://staging.komunitasmea.com/api/login", options)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("mea-login", JSON.stringify(response.data));
        navigate("/home");
      })
      .catch((err) => console.error(err));
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "Show") {
      e.target.innerHTML = "Hide";
      document.getElementById("password").type = "text";
    } else {
      e.target.innerHTML = "Show";
      document.getElementById("password").type = "password";
    }
  };
  return (
    <div className="login-container">
      <div className="login-banner">
        <p>
          <b>KOMUNITAS MEA</b>
        </p>
        <p style={{ fontWeight: 300 }}>Komunitas Jago Jualan Online</p>
      </div>
      <div className="action-container">
        <div className="action-btn-container">
          <button>Masuk</button>
          <button>Daftar</button>
        </div>
        <div
          className="action-form-container"
          style={{ alignItems: "center", padding: "0 15%" }}
        >
          <p style={{ color: "gray", textAlign: "center", margin: "5rem 0" }}>
            Silahkan masuk ke akun Komunitas MEA kamu !
          </p>
          <form
            onSubmit={(e) => handleLogin(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <label htmlFor="nama">Nama Lengkap</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => handleEmail(e)}
              placeholder="Masukkan Nama Lengkap"
            />
            <label htmlFor="password">Kata Sandi</label>
            <div
              className="password-container"
              style={{ position: "relative", display: "flex" }}
            >
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => handlePassword(e)}
                placeholder="Masukkan Kata Sandi"
                style={{ width: "100%" }}
              />
              <div className="btn-container" style={{ width: "0%" }}>
                <button
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "15px",
                    color: "orangered",
                    borderBottom: "none",
                    fontSize: "15px",
                    fontWeight: "500",
                    padding: "0 0",
                    width: "auto",
                    zIndex: 100,
                  }}
                  onClick={(e) => togglePassword(e)}
                >
                  Show
                </button>
              </div>
            </div>

            <p>
              <a href="" style={{ textDecoration: "none", color: "orangered" }}>
                Lupa Kata Sandi
              </a>
            </p>
            <input
              type="submit"
              value="Masuk"
              style={{
                backgroundColor: "orangered",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontSize: "20px",
                padding: "1rem 0",
              }}
              disabled={email.length === 0 | password.length === 0}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
