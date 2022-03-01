import "./Header.css";
import react, { useState, useEffect } from "react";

const Header = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // postoje postaje za Rijeku i PGZ ali nema podataka u API-ju
    fetch(
      `https://docs.openaq.org/v2/measurements?limit=10&page=1&offset=0&sort=desc&radius=1000&country_id=HR&location_id=65954&parameter=pm10&parameter=pm25&order_by=datetime`
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      });
  }, []);

  const airQuality = users;

  const Particles = (particle) => {
    // parameter-> object valueName iz API-ja
    const pmElement = (i) => i.parameter === particle;
    const indexOfQuality = airQuality.findIndex(pmElement);
    const quality = users[indexOfQuality]?.value;

    return quality;
  };

  const time = users[0]?.date.local.split("T")[1].slice(0, 5);
  const mediumParticles = Particles("pm25");
  const bigParticles = Particles("pm10");

  return (
    <div className="header">
      <h2>Grad Zagreb, kvaliteta zraka ({time}h): </h2>
      <h2 style={{ color: mediumParticles > 20 ? "darkred" : "green" }}>
        PM2.5 = {mediumParticles} µg/m³{" "}
      </h2>
      <h2 style={{ color: bigParticles > 40 ? "darkred" : "green" }}>
        PM10 = {bigParticles} µg/m³
      </h2>
    </div>
  );
};

export default Header;

//  KASNIJE SAM ZAKLJUČIO DA NE TREBA KOMPLICIRATI S VREMENOM NEGO GA SKROZ MAKNUTI

// const getTime = (minusHour) => {
//   let currentdate = new Date();
//   slice dodaje 0 po potrebi ako je dan ili mjesec jednoznamenkast [jednoznamenkast: 0+3 -> slice(-2) = 03, dvoznamenkast 0+13 -> slice(-2) = 13 ]
//   let time =
//     currentdate.getFullYear() +
//     "-" +
//     ("0" + (currentdate.getMonth() + 1)).slice(-2) +
//     "-" +
//     ("0" + currentdate.getDate()).slice(-2) +
//     "T" +
//     ("0" + (currentdate.getHours() - minusHour)).slice(-2) +
//     "%3A00";
//   return time;
// };

// useEffect(() => {
//   // ako se stavi 2 u getTime funkciju pokupiti će podatke od dva sata ranije do sada
//   // kasnije sam skuzio da se moze fetchat bez vremenskog intervala i uzeti zadnju vrijednost al vec kad ovo funkcionira neka stoji
//   fetch(
//     `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=${getTime(
//       2
//     )}&date_to=${getTime(
//       0
//     )}&limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=HR&location_id=65954&parameter=pm1&parameter=pm25&parameter=pm10&order_by=datetime`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data.results);
//     });
// }, []);
