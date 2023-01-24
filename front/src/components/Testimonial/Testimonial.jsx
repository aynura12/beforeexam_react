import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Testimonial/testimonial.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
const Testimonial = () => {
    const[users,setUsers]=useState(null)
   
    const getUser=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
    }
    const deleteData = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      
    };
        
   useEffect(()=>{
getUser()
   },[])
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
    
        {users?.map((user)=>{
            return( <SwiperSlide key={user.id}>
                <div className="container">
                  <div className="row">
                    <div >
                     
                      <div className="card_text">
                        <div className="card_image">
                           <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                           />
                          <div>
                            <h3>{user?.name}</h3>
                           <p>{user?.username}</p>
                          </div>
                          
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore a, incidunt debitis delectus consectetur eveniet pariatur et. Eum omnis autem voluptatem accusantium porro dignissimos esse, ex impedit temporibus, vitae vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores fugiat explicabo optio, voluptatum inventore eligendi neque eius. Repudiandae illo rem doloribus magnam maxime consectetur quas aliquid officiis reprehenderit veritatis.</p>
                        <button onClick={(id)=>deleteData(user.id)}>delete</button>
                      </div>
                    </div>
                  </div>
                </div>
               
              </SwiperSlide>)
        })}
       
      </Swiper>
    </div>
  );
};

export default Testimonial;
