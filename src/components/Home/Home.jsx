import React, { useEffect, useState } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Resturant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantAction } from "../../State/Restaurant/Action";

// Array of background images for the slider
const backgroundImages = [
  "https://png.pngtree.com/background/20230519/original/pngtree-platter-full-of-chinese-food-picture-image_2663212.jpg",
  "https://png.pngtree.com/background/20230528/original/pngtree-numerous-fast-food-items-sit-on-a-table-picture-image_2780284.jpg", // Add your other images here
  "https://png.pngtree.com/background/20230519/original/pngtree-gourmet-platters-and-dips-from-asian-cuisine-picture-image_2663214.jpg", // Add more image URLs
  "https://png.pngtree.com/background/20230516/original/pngtree-an-array-of-chinese-food-dishes-on-a-tray-picture-image_2612445.jpg",
];

const Home = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    dispatch(getAllRestaurantAction(jwt));

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, [dispatch, jwt]);

  return (
    <div className="pb-10">
      <section
        className="banner -z-50 relative flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
        }}
      >
        <div className="w-[50vw] z-10 text-center">
          <p className="text-2xl lg:text-6xl font-bold z-10 py-5">
            Meal Mingle
          </p>
          <p className="z-10 text-gray-300 text-xl lg:text-4xl">
            Test the convenience: Food, Fast and Delivered.
          </p>
        </div>

        <div className="cover absolute top=0 left-0 right-0 "></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
          Top Meals
        </p>
        <MultiItemCarousel />
      </section>

      <section className="px-5 lg:px-20 pt-10">
        <h1 className="text-2xl font-semibold text-gray-400 pb-8 ">
          Order from our Favourite Restaurants
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-5">
          {restaurant.restaurants.map((item) => (
            <RestaurantCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
