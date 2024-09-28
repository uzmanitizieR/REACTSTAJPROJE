import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      
      text: "Saglıklı tercih avantajları",
    },
    {
      image: ChooseMeals,
      
      text: "Sipariş Tıklanma Sıklıklarımız ",
    },
    {
      image: DeliveryMeals,
      
      text: "Hızlı Ulasım",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">İşleme</p>
        <h1 className="primary-heading">İşleme Yöntemi</h1>
        <p className="primary-text">
        Dengeli bir diyet, bağışıklık sistemini güçlendirir ve metabolizmayı düzenler. Ayrıca, sağlıklı beslenme alışkanlıkları zihinsel ve fiziksel performansı artırır.







        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;