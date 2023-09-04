import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import Header from "../components/Header";
import "./styles/MyCourse.css";

const MyCourse = () => {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("mea-login"))
  );
  const [data, setData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        cookie:
          "mea_access_token=MTY5Mjc1NzI5OHxPOFY0STFsUS00elRkdmUyN1BsdERENXlUMk9heW4takRuSVljamVXWnNFeW9Hd01BZWxQWVMyVUFmZTJPV2l6bTEzUWhVNU84R1V6WldkN3VqdTRfTlU3OFdqZFg1MXk5STVqczBTajJZbkUtUXhhSEF4UDl5czZfNWEzY0ZBaW05RHRYNjE2MmhnbWlNY1B3OTFYNDV4U3F0WnI3M2oxRkgtN0ZlMUFFSVE3al94dndDMExIVm5Id21nR0kzRVN1VU55alp4SzJLSDM5SmlfeTdyOFJ0MEFLNW1idHdpRDljQ1Vtem03d3JJSUVHZEU2a1gxeFpuZVFsN1Z4Ym9lTHVHa09MYz18RzPRwUoOurwSbEtjrxkjPh0gs6lx4axBPllTA748WN8%3D; mea_refresh_token=MTY5Mjc1NzI5OHwtTk5DdmhORVU4UldIWW52a2RiV01OXzNLaUJITlh5eHA4clBLdEVDV25aQ05YRnZWNW94VVNKd0VoVWNzZmJYV0JFTnlfUF9kdWozcHdmM3JGSXB3MDRwRlJZRFNQY1hMZHBXcGN5eGdlUlg3bnk5SUN0eDdNSzZWd0QzaFUtbjhlbmZ4VENBbjVMeUNET0hIZExVV0FFenp2OUE0b0NxNEdvbi1ZRDUzZ29jM2N4NUZaZEJEbm5PZTl2anJld1Q0clJTaHNXUERkSnlKbkhRdEVScGVCNWpwSXA1NGhxZUppVkNKeTNaY0FVOTE5aVJ3bkdlMVRqV1M4Nkw1SV9MU1hOcWNOVT18oTdA8fR-erqLWIACA1LnGX0fZDvJtSsCzPnqDulf5jQ%3D; mea_device_id=BXW2XZ5FR5HZFRRQ533Z",
      },
      credentials: "include",
    };
    fetch(
      `https://staging.komunitasmea.com/api/user/${profile.user_id}/courses/active`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [profile]);
  return (
    <>
      <Header />

      <div className="content-container" style={{ padding: "4rem 2rem" }}>
        <p style={{ color: "white", marginTop: "0", fontSize: "25px" }}>
          Kelas ({data.data?.length})
        </p>
        <div
          className="course-container"
          style={{
            backgroundColor: "#253237",
            borderRadius: "10px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
            alignItems: "center",
            justifyItems: "center",
            padding: "2rem 2rem 4rem 2rem"
          }}
        >
          {data.data?.map((item) => {
            return <CourseCard detail={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyCourse;
