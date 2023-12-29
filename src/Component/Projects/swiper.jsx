import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";

// import required modules
import { Navigation } from "swiper";

export default function SwiperPage() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide style={{ width: "320px" }}>
          <Card
            image="/movie-pj.png"
            title="Movie"
            description="The Movie App is a testament to my journey in learning React. By using the rich data provided by the IMDb API, the app offers users an engaging platform to explore and discover movies. As the project evolves, future enhancements may include features like responsive design, and additional elements to enrich the user experience."
            languages={["React", "TailwindCss"]}
            git="https://github.com/jinn231/Movie-App"
            demo="https://jinn-movie-app.netlify.app/"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "320px" }}>
          <Card
            image="/youtube-clone.png"
            title="YouTube Clone"
            description="
                        This YouTube Clone is a project that I rely on daily, developed after mastering the MERN Stack. Initially uncertain about what to build, this project significantly enhances the backend with a multitude of features. However, in the frontend, to streamline development and save time, I've focused on incorporating only the essential functionalities."
            languages={[
              "ReactJs",
              "TailwindCss",
              "NodeJs",
              "MongoDb",
              "ExpressJs",
            ]}
            git="https://github.com/jinn231/YoutubeClone"
            demo="https://youtube-clonebyjinn.netlify.app/"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "320px" }}>
          <Card
            video="./Videos/chatApp.mov"
            title="Chat App"
            description="This chat app was developed without a specific purpose, more as an exploration when unsure about what to create. Despite its initial aimlessness, it found its place in my portfolio. I intentionally avoided emphasizing real-time functionality in its presentation. Powered by Next.js, the app, while effective in its purpose, isn't optimized for deployment efficiency and does not incorporate SEO-related elements."
            languages={[
              "NextJs",
              "TailwindCss",
              "NodeJs",
              "MongoDb",
              "ExpressJs",
              "socket.io",
            ]}
            git="https://github.com/jinn231/Chat-App"
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "320px" }}>
          <Card
            image="/OnlineShop.png"
            title="Online Shop"
            description="This app serves as a project that helped me become acquainted with ReactJS. Developed during my learning phase with React, it coincided with my exploration of Redux and focused on the exclusive creation of the user interface."
            languages={["React", "TailwindCss"]}
            git="https://github.com/jinn231/OnlineShop"
            demo="https://online-shop-eight-alpha.vercel.app/"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

/**
 * 
 *
               
               
                

 * 
 */
