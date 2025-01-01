import styles from "../page.module.css";

import { Slider } from "@/components/slider/Slider";
import { Product } from "@/components/product/Product";

export default function Home() {
  return (
    <>
      <Slider />
      <Product />
    </>
  );
}
