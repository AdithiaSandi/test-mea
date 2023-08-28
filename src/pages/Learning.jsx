import { useState, useEffect } from "react";
import Header from "../components/Header";
import "./styles/Learning.css";

const Learning = () => {
  const userId = JSON.parse(localStorage.getItem("mea-login")).user_id;
  const courseId = JSON.parse(localStorage.getItem("mea-course")).course_id;

  const [data, setData] = useState({});
  const [vidCoord, setVidCoord] = useState({ chapter: 0, lesson: 0 });

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
      `https://staging.komunitasmea.com/api/course?course_id=${courseId}&user_id=${userId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, [courseId, userId]);

  const handlePrev = () => {
    vidCoord.lesson === 0
      ? setVidCoord((prev) => ({
          chapter: prev.chapter - 1,
          lesson: data.chapters[prev.chapter - 1].lessons.length - 1,
        }))
      : setVidCoord((prev) => ({ ...prev, lesson: prev.lesson - 1 }));
  };

  const handleNext = () => {
    data.chapters[vidCoord.chapter].lessons.length - 1 === vidCoord.lesson
      ? setVidCoord((prev) => ({ chapter: prev.chapter + 1, lesson: 0 }))
      : setVidCoord((prev) => ({ ...prev, lesson: prev.lesson + 1 }));
  };
  if (!data.chapters) {
    return null;
  } else {
    return (
      <>
        <Header />
        <div
          className="content-container"
          style={{ minHeight: "100%", color: "white", padding: "2rem 20vw" }}
        >
          <p style={{ margin: "0", marginBottom: "2rem" }}>
            <b>
              <u>{data.chapters[vidCoord.chapter].title}</u>
            </b>
            <br />
            {vidCoord.lesson + 1}.{" "}
            {data.chapters[vidCoord.chapter].lessons[vidCoord.lesson].title}
          </p>
          {data.chapters === undefined ? null : data.chapters[
              vidCoord.chapter
            ]?.lessons[vidCoord.lesson]?.link.includes("youtube") ? (
            <div className="iframe-container">
              <iframe
                className="responsive-iframe"
                src={
                  data.chapters[vidCoord.chapter].lessons[vidCoord.lesson].link
                }
                width="1100"
              />
            </div>
          ) : (
            <video
              width="1100"
              controls
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            >
              <source
                src={
                  data.chapters[vidCoord.chapter].lessons[vidCoord.lesson].link
                }
                type="video/mp4"
              />
            </video>
          )}
          <br />
          <div
            className="btn-container"
            style={{ margin: "1.62rem", marginLeft: 0, marginRight: 0 }}
          >
            <button
              style={{
                visibility:
                  vidCoord.chapter === 0 && vidCoord.lesson === 0
                    ? "hidden"
                    : "visible",
              }}
              onClick={() => handlePrev()}
            >
              &lt;&lt; Sebelumnya{" "}
            </button>
            <button
              style={{
                visibility:
                  vidCoord.chapter === data.chapters.length - 1 &&
                  vidCoord.lesson ===
                    data.chapters[vidCoord.chapter].lessons.length - 1
                    ? "hidden"
                    : "visible",
              }}
              onClick={() => handleNext()}
            >
              Selanjutnya &gt;&gt;
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Learning;
