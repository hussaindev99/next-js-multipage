import Image from "next/image";
import Header from "@/app/(component)/header/Header";
import Foooter from "./(component)/footer/Foooter";
import Slider from "./(component)/slider/Slider";
import Cards from "./(component)/shortcard/Cards";
import Cardes from "./(component)/imgcard/Cardes";
import Card from "./(component)/longcard/Card";
import Letter from "./(component)/newsletter/Letter";
import Soon from "./commingsoon/Soon";
export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Cards />
      <Cardes />
      <Card />
      <Letter />
      <Soon />
      <Foooter />
    </div>
  );
}
