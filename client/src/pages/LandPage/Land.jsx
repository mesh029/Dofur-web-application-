import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/footer"
import Postpro from "../../components/post/Postpro"
import NavBar from "../../components/topbar/NavBar"
import Postprs from "../../components/Postpros/Postprs"

import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import Carousel from "../../components/carousel/Carousel";
import LandCard from "../../components/landCard/LandCard";
import "./land.css";
import axios from "axios";
import { useLocation } from "react-router";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonProduct from "../../components/loadingSkeleton/LoadingSkeleton"
import SkeletonProductPost from "../../components/loadingSkeleton/LoadingSkeletonPost"
var cors = require('cors')

var text = "#### I am a chess enthusiast who enjoys:\n \n>*Travelling*\n \n>*Basketballn*\n \n *>Poetry*\n \n##### In this blog I seek to bring together the trendiest stuff in regards to what I love, together with some of my friends, to keep you entertained.\n ##### Brace yourself!\n #### This is... \n## Urban 50!"




var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}
export default function Home() {

  const [posts, setPosts] = useState([]);

  const [cards, setCards] = useState([]);
  const { search } = useLocation();

  const mainCard = [
    {
        "_id": "6270e70aa97c2100525cfaf1",
        "cardTitle": "Chess",
        "cardDesc": "The game that showcases the battle of wits within the confines of 64 squares. Feel the adrenaline rush as I bring you the tastiest chess juice from Kenya and the rest of the world.",
        "cardCat": "chess",
        "createdAt": "2022-05-03T08:25:46.022Z",
        "updatedAt": "2022-05-03T08:25:46.022Z",
        "__v": 0
    }
  ]

  console.log(cards)
  /**Implementation of loading screen */
  const [loader, setLoader] = useState(false)
  /**Implementation of loading screen */

  useEffect(() => {
    setLoader(true)
    setTimeout(async () => {
      setLoader(false)
      const fetchCards = async () => {
        const res = await axios.get("/cards/" + search, cors(corsOptions));
        setCards(res.data);
      };
      const fetchPosts = async () => {
        const res = await axios.get(`/posts/?page=${"land"}` + search, cors(corsOptions));
        setPosts(res.data);
        console.log("posts",posts)
      };
      fetchPosts({ category: "chess" });
      fetchCards();
    }, 900)

  }, [search]);
  return (
    <>
      <div>
        <Carousel/>
      </div>
      <div class="land-sec">
        <LandCard/>

      </div>
      
      <Footer />
    </>
  );
}
