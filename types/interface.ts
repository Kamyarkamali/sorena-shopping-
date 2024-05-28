import React, { Dispatch, ReactNode, SetStateAction } from "react";

export interface Ichildren {
  children: React.ReactNode;
}

export interface Itopmenu {
  id: number;
  title: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  paths: string;
}

export interface IsatateOpen {
  hamburger: boolean;
  setHamburger: Dispatch<SetStateAction<boolean>>;
}

export interface Ishop {
  id: number;
  title: string;
  icon: ReactNode;
}

export interface Iproducts {
  id: number;
  name: string;
  like: boolean;
  star: number;
  discountprice?: number;
  price: number;
  image: any;
  image2?: any;
  image4?: any;
  image5?: any;
  image6?: any;
  image7?: any;
  comments: number;
  category: string;
  bestprice?: boolean;
  discount?: number;
  discount2: boolean;
}

export interface Iarticle {
  id: number;
  desc: string;
  image: any;
  name: string;
  moghdame: string;
  title: string;
  title2: string;
}

export interface Icomments {
  id: number;
  like: boolean;
  disLike: boolean;
  title: string;
  category: string;
  name: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Iopen {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
