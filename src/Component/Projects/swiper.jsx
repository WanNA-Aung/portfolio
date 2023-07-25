import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SwiperPage() {
    return (
        <>
            <Swiper

                navigation={true}
                modules={[ Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{ width:"320px" }}>
                    <Card 
                        image="/movie-pj.png" 
                        title="Movie" 
                        description="ကျတော် React ကို လေ့လာပီးပီးချင်းမှာဘဲ ပထမဆုံးစရေးခဲ့ movie project လေးပါ။ Ui ကတော့ YouTube video တစ်ခုကနေ inspired ယူထားပီး API ကိုတော့ IMDB က api ကို ယူသုံးထားပါတယ်။"
                        languages={["React", "TailwindCss"]}
                        git="https://github.com/jinn231/Movie-App" 
                        demo="https://jinn-movie-app.netlify.app/"   
                    />
                </SwiperSlide>
                <SwiperSlide style={{ width:"320px" }}>
                    <Card 
                        image="/youtube-clone.png" 
                        title="YouTube Clone" 
                        description="ဒီ YouTube Clone လေးကတော့ MERN Stack လေ့လာပီးပီးချင်းမှာ ဘာရေးရမှန်းမသိတာနဲ့ နေ့စဉ်သုံးနေတဲ့ YouTube ကိုဘဲ ကောက်ရေးလိုက်တာပါ။ ဒီ project လေးက Backend မှာ features တွေ တော်တော် စုံစုံလင်လင်ထည့်ထားပါတယ်။ Frontend မှာတော့ အချိန်အရမ်းမယူချင်လို features အကုန်ထည့်မသုံးထားပါဘူး။ အဓိက functionality တွေလောက်ဘဲ ထည့်သုံးထားပါတယ်။"
                        languages={["ReactJs", "TailwindCss", "NodeJs", "MongoDb", "ExpressJs"]}
                        git="https://github.com/jinn231/YoutubeClone" 
                        demo="https://youtube-clonebyjinn.netlify.app/"
                    />
                </SwiperSlide>        
                <SwiperSlide style={{ width:"320px" }}>
                    <Card 
                        video="./Videos/chatApp.mov" 
                        title="Chat App" 
                        description="ဒီ Chat App လေးကတော့ ရည်ရွယ်ချက်မရှိဘဲ ဘာလုပ်ရမှန်းမသိလို ထရေးဖြစ်တာပါ။ ရည်ရွယ်ချက်မရှိဘဲ ရေးထားတာဆိုပေမယ့် real-time နဲ့တူအောင်ရောအတတ်နိုင်ဆုံးကြိုးစားပီးရေးထားတာမလို portfolio ထဲမှာ ထည့်သုံးဖြစ်သွားတာပါ။ ဒီ app လေးမှာက NextJs ကိုသုံးထားတယ်ဆိုပေမယ့် Deployed လုပ်တဲ့ အဆင့်ထိရောက်မှာ မဟုတ်တဲ့အတွက် SEO နဲ့ပက်သက်တာတော့ ဘာတစ်ခုမှ မသုံးထားပါဘူး။"
                        languages={["NextJs", "TailwindCss", "NodeJs", "MongoDb", "ExpressJs", "socket.io"]}
                        git="https://github.com/jinn231/Chat-App" 
                    />  
                </SwiperSlide>   
                <SwiperSlide style={{ width:"320px" }}>
                <Card 
                    image="/OnlineShop.png" 
                    title="Online Shop" 
                    description="ဒီ app လေးကတော့ ကျွန်တော် ReactJs ကို အကျွမ်းတဝင်ရှိစေတဲ့ project လေးလိုပြောလိုရပါတယ်။ကျတော် react ကိုလေ့လာနေစဉ်မှာဘဲ ရေးဖြစ်ခဲ့တာပါ။ redux ကိုလေ့လာရင်း Ui သီးသန့်ဘဲရေးဖြစ်ခဲ့တာပါ။"
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