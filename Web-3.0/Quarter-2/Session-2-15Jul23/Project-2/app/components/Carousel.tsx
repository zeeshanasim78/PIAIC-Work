"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { getAllProds } from "@/lib/getAllProds";
import Link from "next/link";
export default function Carousel() {
  const data = getAllProds();
  console.log(data);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={
              "https://media.istockphoto.com/id/535695503/photo/pakistan-monument-islamabad.jpg?s=612x612&w=0&k=20&c=bNqjdf8L-5igcRB89DdMgx0kNOmyeo1J_zzXmoxxl8w="
            }
            alt="Image 1"
            height={500}
            width={500}
          />
          <p>{item.name}</p>
          <Link href={`/product/${item.id}`}>Add</Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
