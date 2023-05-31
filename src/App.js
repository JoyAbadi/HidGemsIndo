import "./styles.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 28px;
  position: center;
`;

const Kalimantan = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
      <img src={props.gambar} alt="Gambar Kalimantan" />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DRX4bswtQzI"
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Sumatera = (props) => {
  console.log(props);
  return (
    <div>
      <hr className="divider" /> {/* Garis pemisah horizontal */}
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
      <img src={props.gambar} alt="Gambar Sumatera" />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mma2VLig9LU"
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Jawa = (props) => {
  console.log(props);
  return (
    <div>
      <hr className="divider" /> {/* Garis pemisah horizontal */}
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
      <img src={props.gambar} alt="Gambar Jawa" />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2HuBBW4SJxc"
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Sulawesi = (props) => {
  console.log(props);
  return (
    <div>
      <hr className="divider" /> {/* Garis pemisah horizontal */}
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
      <img src={props.gambar} alt="Gambar Sulawesi" />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LTmmnv7N7N8"
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const Papua = (props) => {
  console.log(props);
  return (
    <div>
      <hr className="divider" /> {/* Garis pemisah horizontal */}
      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
      <img src={props.gambar} alt="Gambar Papua" />
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7YHF11EFKUA"
          title="Video YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div id="homepage">
        <div id="logo">
          <h1 id="text">HidGemsIndo</h1>
        </div>
        <div id="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <a href="about.html">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src="https://statis.dewi.me/webp-express/webp-images/uploads/2022/02/indonesia-37-provinsi-1536x831.png.webp"
          alt="Peta Indonesia"
          width="1400"
          height="600"
        />
        <p1 id="introtext">
          <span>Welcome to HidGemsIndo Tourism</span>
          &mdash; Wonderful Indonesia &mdash;
        </p1>
        <button className="button">
          <StyledLink to="/dashboard">Explore Indonesia</StyledLink>
        </button>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return <div></div>;
}

function About() {
  return <div></div>;
}

function Dashboard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/ip")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTime(data.datetime);
      });
  }, []);
  return (
    <div className="container">
      <h1>Wisata Alam Indonesia</h1>
      <p>
        Berikut adalah wisata yang ada di Indonesia namun banyak orang yang
        belum mengenalnya secara luas
      </p>
      <p>Waktu Akses: {time}</p>

      <Kalimantan
        judul="Danau Tahai"
        deskripsi="Objek wisata alam yang menawarkan keindahan danau yang masih asri ini memang nggak ada duanya. Kamu yang hobi tracking bisa mengelilingi Danau Tahai dan mengabadikannya."
        gambar="https://content.shopback.com/id/wp-content/uploads/2018/05/21150603/danau-tahai.jpg"
      />
      <Sumatera
        judul="Sibea Bea"
        deskripsi="Tempat ini dilokasikan di Kabupaten Samosir, Sumatera Utara. Bukit Sibea-bea ini merupakan tempat wisata religi baru, yang dibuka untuk umum sejak pertengahan tahun 2021 lalu. Di sini, wisatawan bisa menikmati pemandangan alam Danau Toba yang sangat indah dengan bukit-bukit yang mengitarinya. Namun, daya tarik utama dari tempat wisata ini adalah jalanan berkelok yang menjadi spot foto bagi wisatawan."
        gambar="https://asset.kompas.com/crops/AB5_2kzuRwvvluUeFuA_5HIdXT8=/1x0:1651x1100/750x500/data/photo/2021/01/30/60149594178f3.jpg"
      />
      <Jawa
        judul="Bukit Jaddih"
        deskripsi="Wisata yang terletak di Bangkalan, Madura ini memiliki pemandangan unik kombinasi waduk dengan air berwarna toska, langit cerah, serta bukit kapur putih raksasa yang menjulang."
        gambar="https://akcdn.detik.net.id/visual/2020/09/26/ilustrasi-air-terjun-4_169.jpeg?w=650&q=90"
      />
      <Sulawesi
        judul="Pulau Lanyukang"
        deskripsi="Pulau ini adalah pulau terluar dari kota Makassar yang bisa menempuh waktu perjalan sekitar 2-3 jam dengan menggunakan speed boat. Tapi kita bisa disuguhkan dengan pemandangan yang indah dari pulau ini."
        gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54dEjjS3O1lgVgWpJyLecan-TibWc2onJ866QXjQyfg&s"
      />
      <Papua
        judul="Taman National Lorentz"
        deskripsi="Taman Nasional Lorentz di Papua pun memiliki kemegahan terbesar di Asia Tenggara dan diakui sebagai situs warisan dunia oleh UNESCO. Saking luasnya, 2.505.600 hektare lahan taman ini menempati 10 kabupaten di Papua."
        gambar="https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/7-destinasi-wisata-di-pulau-papua-yang-indahnya-tiada-dua/tamnas%20lorentz.jpg"
      />
      <ScrollToTopButton />
    </div>
  );
}
