import {
  Iarticle,
  Icomments,
  Iproducts,
  Ishop,
  Itopmenu,
} from "@/types/interface";

//icons
import { CiShoppingBasket } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { Gi3dGlasses } from "react-icons/gi";
import { PiDress } from "react-icons/pi";
import { AiOutlineMobile } from "react-icons/ai";
import { ImMakeGroup } from "react-icons/im";
import { SlWrench } from "react-icons/sl";

import image1 from "../public/products/1.webp";
import image2 from "../public/products/2.webp";
import image3 from "../public/products/3.webp";
import image4 from "../public/products/4.webp";
import image5 from "../public/products/5.webp";
import image6 from "../public/products/6.webp";
import image7 from "../public/products/mashintarash1.webp";
import image8 from "../public/products/asus1.webp";
import image9 from "../public/products/handss1.webp";

import laptop1 from "../public/products/laptop1.webp";
import laptop2 from "../public/products/laptop2.webp";
import laptop3 from "../public/products/laptop3.webp";
import laptop4 from "../public/products/laptop4.webp";
import laptop5 from "../public/products/laptop5.webp";

import darail1 from "../public/products/derail1.webp";
import darail2 from "../public/products/derail2.webp";
import darail3 from "../public/products/derail3.webp";
import darail4 from "../public/products/derail4.webp";
import darail5 from "../public/products/derail5.webp";

import whatch1 from "../public/products/watch1.webp";
import whatch2 from "../public/products/watch2.webp";
import whatch3 from "../public/products/watch3.webp";
import whatch4 from "../public/products/watch4.webp";
import whatch5 from "../public/products/watch5.webp";

import appleeatch1 from "../public/products/apple1.webp";
import appleeatch2 from "../public/products/apple2.webp";
import appleeatch3 from "../public/products/apple3.webp";
import appleeatch4 from "../public/products/apple4.webp";
import appleeatch5 from "../public/products/apple5.webp";

import hand1 from "../public/products/hand1.webp";
import hand2 from "../public/products/hand2.webp";
import hand3 from "../public/products/hand3.webp";
import hand4 from "../public/products/hand4.webp";
import hand5 from "../public/products/hand5.webp";

import apadana1 from "../public/products/apadana1.webp";
import apadana2 from "../public/products/apadana2.webp";
import apadana3 from "../public/products/apadana3.webp";
import apadana4 from "../public/products/apadana4.webp";
import apadana5 from "../public/products/apadana5.webp";

import mashin1 from "../public/products/mashintarash1.webp";
import mashin2 from "../public/products/mashintarash2.webp";
import mashin3 from "../public/products/mashintarash3.webp";
import mashin4 from "../public/products/mashintarash4.webp";
import mashin5 from "../public/products/mashintarash5.webp";

import asues1 from "../public/products/asus1.webp";
import asues2 from "../public/products/asus2.webp";
import asues3 from "../public/products/asus3.webp";
import asues4 from "../public/products/asus4.webp";
import asues5 from "../public/products/asus5.webp";

import handss1 from "../public/products/asus5.webp";
import handss2 from "../public/products/asus5.webp";
import handss3 from "../public/products/asus5.webp";
import handss4 from "../public/products/asus5.webp";
import handss5 from "../public/products/asus5.webp";

import atricle1 from "../public/artiicles/atricle1.jpg";
import atricle2 from "../public/artiicles/atricle2.jpg";
import atricle3 from "../public/artiicles/atricle3.jpg";
import atricle4 from "../public/artiicles/atricle4.jpg";

export const topMenuTitle: Itopmenu[] = [
  { id: 1, title: "صفحه اصلی", paths: "/" },
  {
    id: 2,
    icon: <CiShoppingBasket size={22} />,
    title: "فروشگاه",
    icon2: <MdKeyboardArrowDown size={22} />,
    paths: "/",
  },
  { id: 3, title: "شگفت انگیز", paths: "/" },
  { id: 4, title: "پرفروش ترین ها", paths: "/" },
  { id: 5, title: "ارتباط با ما", paths: "/" },
  { id: 6, title: "صفحات", icon2: <MdKeyboardArrowDown />, paths: "/" },
];

export const shop: Ishop[] = [
  { id: 1, title: "سوپر مارکت", icon: <CiShop size={30} /> },
  { id: 2, title: "لوازم خانگی", icon: <IoHomeOutline size={30} /> },
  { id: 3, title: "عینک", icon: <Gi3dGlasses size={30} /> },
  { id: 4, title: "پوشاک", icon: <PiDress size={30} /> },
  { id: 5, title: "موبایل", icon: <AiOutlineMobile size={30} /> },
  { id: 6, title: "لوازم آرایشی", icon: <ImMakeGroup size={30} /> },
  { id: 7, title: "ابزار آلات", icon: <SlWrench size={30} /> },
];

export const products: Iproducts[] = [
  {
    id: 1,
    name: "لپ تاپ ایسوس مدل a342",
    star: 4.3,
    discountprice: 1350000,
    image: image1,
    image2: laptop1,
    image4: laptop2,
    image5: laptop3,
    image6: laptop4,
    image7: laptop5,
    price: 1100000,
    comments: 3,
    category: "laptop",
    like: false,
    discount: 3,
    discount2: true,
  },
  {
    id: 2,
    name: "دریل شارژی رگنار",
    star: 4.2,
    discountprice: 2450000,
    image: image2,
    image2: darail1,
    image4: darail2,
    image5: darail3,
    image6: darail4,
    image7: darail5,
    price: 2100000,
    comments: 2,
    category: "supplies",
    like: false,
    discount: 8,
    discount2: true,
  },
  {
    id: 3,
    name: "ساعت مدل رولکس",
    star: 4.7,
    discountprice: 18900000,
    image: image3,
    image2: whatch1,
    image4: whatch2,
    image5: whatch3,
    image6: whatch4,
    image7: whatch5,
    price: 15200000,
    comments: 4,
    category: "whatch",
    like: false,
    discount: 5,
    discount2: true,
  },
  {
    id: 3,
    name: "اپل واچ",
    star: 4.2,
    discountprice: 20000000,
    image: image4,
    image2: appleeatch1,
    image4: appleeatch2,
    image5: appleeatch3,
    image6: appleeatch4,
    image7: appleeatch5,
    price: 1230000,
    comments: 4,
    category: "apple",
    like: false,
    discount: 7,
    discount2: true,
  },
  {
    id: 4,
    name: "هندزفری بلوتوثی مدل اپل",
    star: 4,
    discountprice: 43000000,
    image: image5,
    image2: hand1,
    image4: hand2,
    image5: hand3,
    image6: hand4,
    image7: hand5,
    price: 1230000,
    comments: 4,
    category: "apple",
    like: false,
    discount: 7,
    discount2: true,
  },
  {
    id: 5,
    name: "پروژکتور آپادانا",
    star: 4.8,
    discountprice: 27330000,
    image: image6,
    image2: apadana1,
    image4: apadana2,
    image5: apadana3,
    image6: apadana4,
    image7: apadana5,
    price: 25600000,
    comments: 4,
    category: "projector",
    like: false,
    discount: 7,
    discount2: true,
  },
  {
    id: 6,
    name: "ماشین اصلاح موی سر و صورت وی جی ار مدل V-071",
    star: 4.2,
    image: image7,
    image2: mashin1,
    image4: mashin2,
    image5: mashin3,
    image6: mashin4,
    image7: mashin5,
    price: 4540000,
    comments: 4,
    category: "supplies",
    like: false,
    discount2: false,
    bestprice: true,
  },
  {
    id: 7,
    name: "لپ تاپ 18 اینچی ایسوس مدل",
    star: 4.2,
    image: image8,
    image2: asues1,
    image4: asues2,
    image5: asues3,
    image6: asues4,
    image7: asues5,
    price: 268000000,
    comments: 4.8,
    category: "laptop",
    like: false,
    discount2: false,
    bestprice: true,
  },
  {
    id: 8,
    name: "هندزفری بلوتوثی مدل اپل",
    star: 4,
    image: image5,
    image2: hand1,
    image4: hand2,
    image5: hand3,
    image6: hand4,
    image7: hand5,
    price: 1230000,
    comments: 4,
    category: "apple",
    like: false,
    discount2: false,
    bestprice: true,
  },
  {
    id: 9,
    name: "ساعت مدل رولکس",
    star: 4.7,
    image: image3,
    image2: whatch1,
    image4: whatch2,
    image5: whatch3,
    image6: whatch4,
    image7: whatch5,
    price: 15200000,
    comments: 4,
    category: "whatch",
    like: false,
    discount2: false,
    bestprice: true,
  },
  {
    id: 10,
    name: "هدفون بلوتوثی هیسکا مدل K-380HP",
    star: 3.7,
    image: image9,
    image2: handss1,
    image4: handss2,
    image5: handss3,
    image6: handss4,
    image7: handss5,
    price: 9950000,
    comments: 4,
    category: "whatch",
    like: false,
    discount2: false,
    bestprice: true,
  },
];

export const articles: Iarticle[] = [
  {
    id: 1,
    image: atricle1,
    desc: "معرفی لپ تاپ",
    name: "",
    moghdame: "",
    title: "",
    title2: "",
  },
  {
    id: 2,
    image: atricle2,
    desc: "معرفی ساعت جدید اپل",
    name: "",
    moghdame: "",
    title: "",
    title2: "",
  },
  {
    id: 3,
    image: atricle3,
    desc: "شارژ همراه جدید",
    name: "",
    moghdame: "",
    title: "",
    title2: "",
  },
  {
    id: 4,
    image: atricle4,
    desc: "کنسول بازی همراه",
    name: "",
    moghdame: "",
    title: "",
    title2: "",
  },
];

export const Localcomments: Icomments[] = [
  {
    id: 1,
    name: "عیلرضا",
    like: true,
    disLike: false,
    title: "من که خیلی راضی بودم",
    category: "whatch",
  },
  {
    id: 2,
    name: "کوروش",
    like: false,
    disLike: true,
    title: "بسته بندی ای در کار نبود درخواست مرجوعی دادم",
    category: "whatch",
  },
  {
    id: 3,
    name: "کامیار",
    like: true,
    disLike: false,
    title: "نبسبت به قیمتش  خوب بودش",
    category: "whatch",
  },
  {
    id: 4,
    name: "آتوسا",
    like: false,
    disLike: true,
    title: "اصلا پیشنهاد نمیکنم, اشتباه کردم نظرات رو نخوندم",
    category: "apple",
  },
  {
    id: 5,
    name: "فرخنده",
    like: true,
    disLike: false,
    title: "سوکت شارژرش کمی مشکل داشت که تعویض کردن",
    category: "apple",
  },
  {
    id: 6,
    name: "آرزو",
    like: true,
    disLike: false,
    title: "واقعا نسبت به قیمتش عالی هستش",
    category: "laptop",
  },
  {
    id: 7,
    name: "فرهاد",
    like: true,
    disLike: false,
    title: "کمی دیر به دستم رسید ولی کیفت سیستم عالی هستش",
    category: "laptop",
  },
  {
    id: 8,
    name: "زهرا",
    like: false,
    disLike: true,
    title: "تاچ پدش خراب بود درخواست مرجوعی دادم",
    category: "laptop",
  },
  {
    id: 9,
    name: "محمد حسین",
    like: false,
    disLike: true,
    title: "کیفت نداشت نسبت به قیمتش",
    category: "supplies",
  },
  {
    id: 10,
    name: "کامبیز",
    like: false,
    disLike: true,
    title: "برای مغازم گرفتم, خوبه",
    category: "projector",
  },
];
