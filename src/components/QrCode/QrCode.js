import React, { useState } from "react";

const QrCode = (props) => {
  const [img, setImg] = useState("");
  const Data = `${props.value}`;

  const imageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Data}`;

  (async () => {
    const response = await fetch(imageUrl);
    const imageBlob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImg(base64data);
    };
  })();

  return <img className="qr-code" src={imageUrl} alt="" />;
};

export default QrCode;
