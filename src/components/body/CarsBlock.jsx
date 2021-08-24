import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarItems from "./CarItems";
import { fetchCars } from "../../assets/redux/action/cars";
import SkeletonElement from "./../../assets/skeletons/SkeletonElement";
import Masonry from "react-masonry-css";

const CarsBlock = () => {
  const { order } = useSelector(({ filter }) => filter);
  const { value } = useSelector(({ search }) => search);
  const { items, isLoaded } = useSelector(({ cars }) => cars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars(order, value));
  }, [order, value]);

  const breakpointColumnsObj = {
    default: 4,
    991: 3,
    768: 2,
    480: 1
  };

  return (
    <div className="list-auto__list">
      {isLoaded ? (
        value.length > 0 && !items.length ? (
          <span className="list-auto__empty">
            По вашему запросу автомобили не найдены.
          </span>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items &&
              items.map((obj) => <CarItems key={Math.random()} cars={obj} />)}
          </Masonry>
        )
      ) : (
        <div className="skeleton-wrap">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <SkeletonElement key={index} type="square" />
            ))}
        </div>
      )}
    </div>
  );
};
export default CarsBlock;
