import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/footer";
import Postpro from "../../components/post/Postpro";
import NavBar from "../../components/topbar/NavBar";
import Postprs from "../../components/Postpros/Postprs";

import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import Carousel from "../../components/carousel/Carousel";
import "./donate.css";
import axios from "axios";
import { useLocation } from "react-router";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonProduct from "../../components/loadingSkeleton/LoadingSkeleton";
import SkeletonProductPost from "../../components/loadingSkeleton/LoadingSkeletonPost";
import Single from "../../components/singleRecipientInfo/Single";
var cors = require("cors");

var text =
  "#### I am a chess enthusiast who enjoys:\n \n>*Travelling*\n \n>*Basketballn*\n \n *>Poetry*\n \n##### In this blog I seek to bring together the trendiest stuff in regards to what I love, together with some of my friends, to keep you entertained.\n ##### Brace yourself!\n #### This is... \n## Urban 50!";

var corsOptions = {
  origin: "ttps://wubbachess.herokuapp.com",
  optionsSuccessStatus: 200,
};
export default function Donate() {
  const [posts, setPosts] = useState([]);

  const [cards, setCards] = useState([]);
  const { search } = useLocation();
  const [index, setIndex] = useState(1)

  const mainCard = [
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      cardTitle: "Chess",
      cardDesc:
        "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
  ];

  const recCard = [
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
    {
      _id: "6270e70aa97c2100525cfaf1",
      name: "Muko",
      cardTitle: "Chess",
      cardDesc:
        " This is Muko, a child from Meru, last year he got a good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you cana good grade in kcse but seeks assistance to join Highschool..Funds required are bluh bluh blh..please help..I know you can",
      cardCat: "chess",
      createdAt: "2022-05-03T08:25:46.022Z",
      updatedAt: "2022-05-03T08:25:46.022Z",
      __v: 0,
    },
  ];

  const recipient = {
    categories: [],
    _id: "62c5eafc7f2a45005241e4f1",
    username: "chessMesh",
    title: "When you dream",
    desc: "What if we just played chess 'witty'",
    content:
      'The ability to come up with interesting positions over and over again without thinking much is no easy feat in chess. One has to have studied lots of chess books and memorized a lot of lines and mind boggling variations. Though controversial to some to hear, I want to believe there is a better way to come up with these amazing patterns which to my opinion are nothing short of art!\n\n\n![image](https://dunderid.sirv.com/Images/variation.jpeg "variations")\n\n> "<p>Every chess master was once a beginer."</p> <div> *~Irving Chernev*</div>\n\nFrom the moment we understand the movements of chessmen and learn how to coordinate them, we are open to an almost limitless number of inventions on a single chess board. Our brains try figuring out the best ways to outwit an opponent and when found seeks even better ways with every coming challenge. The way a person plays a chess game can tell a lot about their charachter depending on what strategies they use to win. We have mainly attackers and positional players. The attackers tend to be more aggresive and want an interesting much faster path to victory while positional players are more strategic and endure long calculations just to set their opponents off balance and get them sweating through the endgame. It is interesting really how these come naturally as if it were pure instinct; that is to say no chess player can copy the overall style of another player! It is tailor made to every individual player depending on how they see, perceive and face challenges in their every day life.\n\n![image](https://dunderid.sirv.com/Images/18915856.jpg "thinking man")\n\nBeing so interesting a game, chess players felt the urge to find the best of the best among them as is common with every other aspect in life be it sport or surprisingly enough, even eating! Early players documented their games to make sure mistakes made during past games did not  repeat themselves. They sought perfection and as always, it comes with a prize. Generations to come would later study the games of their predecessors, analyze and find better solutions to common variations which showed up in games. 10 centuries later, with all the tech and its never ending improvements in matters chess engines, chess has simply become less interesting. Winners are decided on basis of who memorizes the deepest lines and who crams the most variations between games. Blitz games have been used to escape this monotony; slicing the time needed to recall all these jumbled up variations in a players head by close to three quaters. Lol.\n\nI would love to see chess beginners turn into dreamers who bring out new plans and ideas to life with some sense of pride. Pride they did it their own way because every other player has their genius trapped in them, wanting to be let of leash. All we have going in the chess scene is people proud of how good they are at absorbing insurmountable chess content from overpriced books, programs and premium chess videos. How can such a player be called genius?  Its as much of a cliche as claiming everyone who plays chess is without question an intellect. \n\nEven so, the helm is still for the taking. All we need do is choose which path to follow, a path that doesn\'t lead to chess doomsday when nothing about chess is intersting. I say hard a-starboard chess folks! We can do this, **we can dream!**\n\n\n\n\n\n',
    category: "chess",
    slug: "when-you-dream",
    shot: '"every player has their genius, trapped in them, wanting to be let of leash"',
    shotAuthor: "Mesh",
    createdAt: "2022-07-06T20:05:16.808Z",
    updatedAt: "2022-07-06T21:21:17.160Z",
    __v: 0,
  };

  console.log(cards);
  /**Implementation of loading screen */
  const [loader, setLoader] = useState(false);
  /**Implementation of loading screen */

  useEffect(() => {
    setLoader(true);
    setTimeout(async () => {
      setLoader(false);
      const fetchCards = async () => {
        const res = await axios.get("/cards/" + search, cors(corsOptions));
        setCards(res.data);
      };
      const fetchPosts = async () => {
        const res = await axios.get(
          `/posts/?page=${"land"}` + search,
          cors(corsOptions)
        );
        setPosts(res.data);
      };
      fetchPosts({ category: "chess" });
      fetchCards();
    }, 900);
  }, [search]);
  return (
    <>
      <div className="donorContainer">
        <div className="donorContainerLeft">
          <div class="land-sec">
            {!loader ? (
              cards.length >= 1 ? (
                <Cards cards={recCard} />
              ) : (
                <div className="skeletons">
                  {[1].map((loading) => (
                    <SkeletonProduct />
                  ))}
                </div>
              )
            ) : (
              <div className="skeletons">
                {[1, 2, 3, 4, 5].map((loading) => (
                  <SkeletonProduct />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="donorContainerRight">
          <Single post={recipient} />
        </div>
      </div>

      <Footer />
    </>
  );
}
