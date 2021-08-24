import React, { useState } from "react";

const CarItems = ({ cars }) => {
  const [featuresShow, setFeatures] = useState(false);

  let carPrice =
    cars.price
      .toString()
      .replace(/(^0|[A-Za-zА-Яа-яЁё]|\s)/, "")
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + ` ₽`;

  let featuresCarShow = cars.features.map((features) => (
    <li key={Math.random()} className="auto__feature">
      {features}
    </li>
  ));
  let feturesCarHide = cars.features.slice(0, 3).map((features) => (
    <li key={Math.random()} className="auto__feature">
      {features}
    </li>
  ));
  let lessCountFeatures = featuresCarShow.length - 3;

  return (
    <li key={cars.id} className="list-auto__item">
      <div className="list-auto__item-content">
      <div className="auto__header">
        <img src={cars.images} alt={cars.model_name} />
        <p className="auto__title">{cars.model_name}</p>
        <p className="auto__price">{carPrice}</p>
      </div>
      <div className="auto__body">
        <ul className="auto__features">
          {featuresShow ? featuresCarShow : feturesCarHide}
        </ul>
        {lessCountFeatures > 0 && (
          <span
            className="auto__show-more"
            onClick={() => setFeatures((current) => !current)}
          >
            {featuresShow
              ? "Скрыть"
              : "еще " + lessCountFeatures + " особенности"}
          </span>
        )}
      </div>
      <div className="auto__footer">
        <img
          className="auto__footer-img"
          src="https://img.icons8.com/material-outlined/24/4a90e2/place-marker--v1.png"
          alt={cars.model_name}
        />
        <a href={cars.dealer.url} className="auto__address">
          <span>
            {cars.dealer.name} {cars.dealer.city} {cars.dealer.address}
          </span>
        </a>
      </div>
      </div>
    </li>
  );
};

export default CarItems;
