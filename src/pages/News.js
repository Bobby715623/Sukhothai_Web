
import React, { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import "./News.css";

export default function News({ limit, heading = "ALL NEWS" }) {
  useEffect(() => {
    const header =
      document.getElementById("site-header") ||
      document.querySelector(".navbar.fixed-top") ||
      document.querySelector("header");
    const setH = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${header ? header.offsetHeight : 96}px`
      );
    setH();
    const ro = header ? new ResizeObserver(setH) : null;
    ro?.observe?.(header);
    window.addEventListener("resize", setH);
    return () => {
      ro?.disconnect?.();
      window.removeEventListener("resize", setH);
    };
  }, []);

  const news = [
    {
    id: "srongsak-win",  
    image:
      "https://scontent.fbkk22-6.fna.fbcdn.net/v/t39.30808-6/565101104_1388881713238610_8740754500584147136_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jAzUyW_Ye1EQ7kNvwEzKg0M&_nc_oc=AdnK-cihgigRE3DcbkoADQfKxqJTOI8C_zcKzw0wrPgNDUFkSwbd4lTGnlIwhA_dW7fzAYVRUi2IY7ga2o4w96dq&_nc_zt=23&_nc_ht=scontent.fbkk22-6.fna&_nc_gid=Jp2oK_avC2PhcXHavqmrKQ&oh=00_AfcBxfQBAfOO0T6uOmVBa7Yb3fP759KufM7YBs442I6j1g&oe=68FECBA3",
    category: "News",
    title: "ยินดีกับชัยชนะ!!!",
    excerpt: "'ศฤงคาร พรมสุภะ' นักฟุตบอลทีมชาติไทย",
    detail: ["ศฤงคาร พรหมสุภะ เก่งมากพาตัวเองมาขนาดนี้ได้",
          "เด็กศรีสะเกษย้ายมาอยู่ระยอง ทำงานหาเงินตั้งแต่เด็ก จ็อบเสริมคืองาน รปภ. ควบคู่ซ้อมบอลไปด้วย",
          'จนได้เทิร์นโปรกับ ระยอง เอฟซี เป็นขาประจำของทีมชาติไทย ยู-23',
          'ช่วงนึงกับเมืองทอง ศฤงคาร ร้างสนามไปนานทั้งที่ไม่ได้เจ็บ ไม่ทราบสาเหตุแต่ตอนนั้นคิดว่า โอกาสเล่นชุดใหญ่ไม่มีทางเกิดขึ้นแน่ๆ',
          'เพราะเล่นก็ไม่ได้เล่น ย้ายไป สุพรรณบุรี ก็ตกชั้นอีก',
          'โชคดีที่ สุโขทัย เอฟซี ให้ ศฤงคาร ได้มีเกมลงเล่นตลอดจนติดทีมชาติไทยเมื่อปีก่อน',
          'ผลงานของนักเตะวัย 28 ปี รายนี้ จากขาประจำทีมชาติ ยู-23 ตอนนี้น่าจะเป็นขาประจำทีมชาติไทยอีกเช่นกัน',
          'เกมกับไต้หวัน ศฤงคาร เล่นดีมาก โดยเฉพาะจังหวะวิ่งแซงไปแย่งบอลมาจากกองหน้าตัวโอนสัญชาติ รวมถึงจังหวะอื่นๆเป็นที่ประทับใจของแฟนบอล',
          'เขาเก่งมากที่พาตัวเองมาได้ขนาดนี้ คนคุณภาพเจอปัญหาอุปสรรคขนาดไหนก็ผ่านมาได้'],
    date: "1 day ago",
  },
  {
    id: "china-thailand",
    image: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/562341374_1387788650014583_1462058925668051631_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cWw_lqxlDlMQ7kNvwFdHMi4&_nc_oc=Adkwk-1icPC8H95F_-TGnZFj51_u2AJ2bPApJ88u2C8lW3L4h5jpdX_s1nxrVEoBowbaafgP7qG0GuIYzRwJoDPr&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=SWhZt9V94tbZHBXSrzFSrA&oh=00_Affb2dH9KNxMg57kAAM_Vg0pjDzJCsvgLk0K_ORAtc98tQ&oe=68FEDFCD",
    category: "Feature",
    title: "MatchDay ทีมชาติจีน พบ ทีมชาติไทย",
    excerpt: "“แฟนบอลค้างคาวไฟ ร่วมส่งกำลังใจให้ ภัทรพล ศึกษากิจ และ ชัยพล อดทน” ...",
    date: "1 day ago",
  },
  {
    id: "young-player-week",
    image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/558265597_1383068120486636_673324589317666008_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-IaShsgbowAQ7kNvwHi5Pi_&_nc_oc=Adl8_aROipHNGIVKy4V5BqZiwx21bIhFYYosIwMSbnmZPUrUrr8AqipLpUP5rsvTAUYyQbgLvDK6ataU2o_cgMw1&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=KL0QEGVDrZaTNmFCsA6Nrg&oh=00_AfemCh0PZipkYgF6LykStMJBzSlwOTEnUIHmOLZooJY4nw&oe=68FEDD17",
    category: "News",
    title: "YOUNG PLAYER OF THE WEEK!!!",
    excerpt: "ดาวรุ่งยอดเยี่ยม บีวายดี ซีไลออน ...",
    date: "6 day ago",
  },
  {
    id: "romeu-first-goal",
    image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/558114453_1381315637328551_1447608971043239038_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MXOx_1M_O5wQ7kNvwFegawS&_nc_oc=AdnPEaMcKF-ySm851uh9f7LufrFzN80Skob21FNrNwNGu4Ooe1RYeZRQfIfSSrrsfyUTv2YRyKIfX7zgii0GlJs5&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=7p89EYEWPyOaBzwuAolTwA&oh=00_AfePQfZa6X1bNL0qTyttHLKb8gtz_5hPCOaPEp01bHpopw&oe=68FF0226",
    category: "News",
    title: "เบิกสกอร์แรกในสีเสื้อค้างคาวไฟ!!!",
    excerpt: "“โรมิอู” นับ 1 อย่างสวยงาม 🦇🔥",
    date: "9 day ago",
  },
  {
    id: "match-7-draw",
    image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/556980523_1378398544286927_4876620976023784140_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-3XMi-C87J0Q7kNvwG82aPN&_nc_oc=Adk0DvMvNHCko-eTLCOoHyhUqWCAzV7EB0Ymu29JEsmahMWL18jVKz3tTSktpQdcTwEVM5xss1UJAf_e2kYUsSry&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=yykh5rdcH0lr4DxVFESaoQ&oh=00_AfdFAs3jz0Njfy7Jd_NFg6iSXEIpGOoDx20raxVcYhPpyg&oe=68FECCB7",
    category: "News",
    title: "จบเกมการแข่งขันนัดที่ 7!!",
    excerpt: "อยุธยา ยูไนเต็ด 1-1 สุโขทัย เอฟซี",
    date: "12 day ago",
  },
  {
    id: "matchday-promo",
    image: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/556386408_1377282031065245_5070191399955180586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WZ0RvoXJvwYQ7kNvwHKbJ-T&_nc_oc=AdkUl5GokcGtYbv4q8w6ezM7ma2TdsT5HGFC_J4Bt6z0YX9PX1-wP2pYPF3Vwbv_8vCGItZIA4M-LTf8tYlEbY-x&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_gid=6UWWsMvII4erPI4DtmVPiQ&oh=00_AfeAxmOtq0362oKryP3WcGosnMJnvwOmk6O6FuxeZizg6A&oe=68FEED8D",
    category: "Feature",
    title: "MATCH DAY 🦇🔥",
    excerpt: "เสาร์ 4 ตุลาคม 2568 เวลา 19.30 น. ...",
    date: "12 day ago",
  },
  ];

  const list = typeof limit === "number" ? news.slice(0, limit) : news;

  return (
    <div className="news-page">
      <div className="container">
        <h2 className="news-heading">{heading}</h2>

        <div className="news-grid">
          {list.map((n, i) => (
            <NewsCard key={n.id || i} item={n} />
          ))}
        </div>

        {/* ปุ่มไปหน้าข่าวทั้งหมดเมื่อมีการจำกัดจำนวน */}
        {typeof limit === "number" && (
          <div style={{ marginTop: 16}}>
            <a href="/news" className="nd-back">All NEWS →</a>
          </div>
        )}
      </div>
    </div>
  );
}
