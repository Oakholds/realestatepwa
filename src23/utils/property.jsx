import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics, MdElevator, MdMovieCreation, MdKitchen } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom, MdOutlinePool, MdSecurity, MdSmartDisplay, MdSportsGymnastics } from "react-icons/md";
import { Elevator, Pool, Security, SmartDisplay, SportsGymnasticsOutlined } from "@mui/icons-material";
import { BiCctv } from "react-icons/bi";
const propertydata = [
    {
      id: "0",
      name: "Acorn",
      price: "",
      detail: "A specially curated ultra-luxury enclave intelligently designed with modern amenities",
      image: ["../Acornhouse1.jpg","../Acornhouse2.jpg","../Acornhouse3.png","../Acornhouse4.png",],
      facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
      amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
      address: "Asokoro ",
      city: "Asokoro",
      country: "Abuja",
      description: "Introducing an exclusive enclave of 10 distinguished detached and semi-detached duplexes. This luxurious collection boasts opulent amenities, including a state-of-the-art gym, alluring pools, and integrated smart home features. Revel in a lifestyle of unparalleled elegance, where every detail embodies sophistication and refinement."
    },
    {
        id: "1",
        name: "The Oak Villa",
        price: "",
        detail: "A specially curated ultra-luxury enclave intelligently designed with modern amenities",
        image: ["../villa1.png", "../villa2.png", "../villa3.jpg"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Asokoro ",
        city: "Asokoro",
        country: "Abuja",
        description: "Introducing an exclusive enclave of 10 distinguished detached and semi-detached duplexes. This luxurious collection boasts opulent amenities, including a state-of-the-art gym, alluring pools, and integrated smart home features. Revel in a lifestyle of unparalleled elegance, where every detail embodies sophistication and refinement."
    },
    {
        id: "2",
        name: "The Oak Place",
        price: "",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../oakplace.jpeg"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 6 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdMovieCreation  size={50} color="#719150" />, name: "Cinema" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Glover road Road",
        city: "Ikoyi",
        country: "Lagos",
        description: "Discover opulent living at our exclusive mini estate, featuring 4 exquisite 5-bedroom fully detached duplexes, luxurious 3-bedroom apartments, and a stunning 4 bedroom penthouse villas. This development is meticulously planned to incorporate a cutting-edge home automation system, overseeing CCTV, energy management, safety, and various other facets, transforming your residence into a smart and intelligent home. A pioneering concept, it stands as the first-of-its-kind housing estate in Nigeria. "
    },
    {
        id: "3",
        name: "Kaylas Haven",
        price: "Sold Out",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../r77.png"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 4 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Victoria Island",
        city: "Victoria Island",
        country: "Lagos",
        description: "Encounter the pinnacle of contemporary luxury in these striking terrace duplexes and semidetached duplexes. Embracing sleek design, flawless finishes, and awe-inspiring vistas, this residence presents a lifestyle unparalleled. Enter a realm of sophistication and relish in the comfort of expansive rooms, exquisite details, and a private terrace ideal for both relaxation and entertainment. Embrace a life adorned with elegance and cultivated refinement"
    },
    {
        id: "4",
        name: "The Oak Mews",
        price: "Sold Out",
        detail: "ikate elegushi lekki, (after 3rd roundabout, behind world oil filling station and blenco supermarket) Lagos",
        image: ["../r77.png"],
        facilities: { "bedrooms": 5, "parkings": 3, "bathrooms": 7 },
        amenities: [ { icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }],
        address: "Ikate Lekki",
        city: "Lagos",
        country: "Nigeria",
        description: "Welcome to a modern oasis in this contemporary 5-bedroom semi-detached duplex—a spacious, state-of-the-art residence perfect for a family home. Nestled in a prime location, this exquisite property embodies elegance, offering ample space and modern amenities, fulfilling every aspiration for refined family living."
    },
    {
        id: "5",
        name: "The Oak Residence",
        price: "",
        detail: "It’s timeless designs draws its inspiration from modern architectural master pieces around the world",
        image: ["../RENDERS/res (1).jpg", "../RENDERS/res (2).jpg", "../RENDERS/res (3).jpg", "../RENDERS/res (4).jpg", "../RENDERS/res (5).jpg", "../RENDERS/res (6).jpg"],
        facilities: { "bedrooms": 4, "parkings": 3, "bathrooms": 5 },
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Musa Yar'adua street",
        city: "Victoria Island",
        country: "Lagos",
        description: "This exquisite masterpiece of 3 Bedroom apartments and 4 bedroom penthouse villas draws its timeless designs and inspiration from modern architectural master pieces around the world. Enjoy a good selection of quality amenities, exquisite modern architecture, maximum security and unparalled service with breathtaking views of Lagos city from each floor of our magnificent development."
    },
    {
        id: "6",
        name: "Kaylas Haven 1",
        price: "Sold Out",
        detail: "A specially curated ultra-luxury enclave intelligently designed with modern amenities",
        image: ["../kh11.jpeg","../kh12.jpeg"],
        facilities:{"bedrooms": 4, "parkings": 3, "bathrooms": 4},
        amenities: [{ icon: <MdKitchen  size={50} color="#719150" />, name: "Kitches" }, { icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Asokoro ",
        city: "Asokoro",
        country :  "Abuja",
        description : "Encounter the pinnacle of contemporary luxury in these striking terrace duplexes and semidetached duplexes. Embracing sleek design, flawless finishes, and awe-inspiring vistas, this residence presents a lifestyle unparalleled. Enter a realm of sophistication and relish in the comfort of expansive rooms, exquisite details, and a private terrace ideal for both relaxation and entertainment. Embrace a life adorned with elegance and cultivated refinement."
      },
      {
        id: "7",
        name: "Kaylas Haven 2",
        price: "Sold Out",
        detail: "An undiluted embodiment of luxury, style and sophistication",
        image: ["../kh21.jpeg","../kh22.jpeg","../kh23.jpeg"],
        facilities:{"bedrooms": 4, "parkings": 3, "bathrooms": 4},
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Glover road Road",
        city: "Ikoyi",
        country:  "Lagos",
        description : "Experience the pinnacle of luxurious living in these 4 bedroom fully detached duplexes. With a perfect blend of comfort, functionality, and convenience, this development promises an amazing living experience. Prepare to be mesmerized by the exquisite design and unrivaled amenities, all delivering an unparalleled lifestyle of elegance and sophistication. Let the stunning interiors and breathtaking views embrace you, as you create everlasting memories in your own private paradise. Get ready to live a life of opulence and pure indulgence!"
      },
      {
        id: "8",
        name: "Lusso",
        price: "Sold Out",
        detail: "Massive opportunity to build your dream home at the base of Mummy Mountain",
        image: ["../lusso.jpeg"],
        facilities:{"bedrooms": 4, "parkings": 3, "bathrooms": 4},
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "No 4 Ribadu Road",
        city: "Ikoyi",
        country:  "Lagos",
        description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack."
      },
      {
        id: "9",
        name: "Nicoles Place",
        price: "Sold Out",
        detail: "ikate elegushi lekki, (after 3rd roundabout, behind world oil filling station and blenco supermarket) Lagos",
        image: ["../np11.jpeg"],
        facilities:{"bedrooms": 4, "parkings": 3, "bathrooms": 4},
        amenities: [{ icon: <MdSportsGymnastics  size={50} color="#719150" />, name: "Gym" }, { icon: <MdSmartDisplay  size={50} color="#719150" />, name: "Smart Home" }, { icon: <MdSecurity  size={50} color="#719150" />, name: "24/7 Security" }, { icon: <MdOutlinePool  size={50} color="#719150" />, name: "Pool" }, { icon: <BiCctv  size={50} color="#719150" />, name: "CCTV" }, { icon: <MdElevator  size={50} color="#719150" />, name: "Elevator" }],
        address: "Ikate Lekki",
        city: "Lagos",
        country:  "Nigeria",
        description: "This development gives an aura of perfection and excellence. This luxury development offers you a lifestyle of exceptional comfort and class due to its stunning and easily accessible location, best quality standards, contemporary architecture and design, functional facilities and unique details. It is meticulously built with YOU in mind to create a truly luxurious and ideal family home living experience"
      }

];
export default propertydata;