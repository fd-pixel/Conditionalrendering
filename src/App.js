import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isim, setIsim] = useState("");
  const [hataMesaji, setHataMesaji] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);

  const handleChange = (event) => setIsim(event.target.value);
  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Beş karakterden büyük olsun.");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };

  return (
    <div className="App" onClick={() => console.log("d")}>
      <h1>React Dersleri </h1>
      {girisYapildi ? (
        <>
          <h2> Hoşgeldin {isim} </h2>
          <button onClick={() => setGirisYapildi(false)}>Çıkış yapınız </button>
        </>
      ) : (
        <React.Fragment>
          <input
            placeholder="İsminiz"
            name="isim"
            value={isim}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(isim)}>Giriş</button>
          <br />
          {hataMesaji ? <h4> {hataMesaji} </h4> : <h2>Giriş Yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}
