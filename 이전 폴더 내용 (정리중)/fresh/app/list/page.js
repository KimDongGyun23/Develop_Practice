import Image from "next/image";
import food0 from "../../public/food0.png"
import food1 from "../../public/food1.png"
import food2 from "../../public/food2.png"

const page = () => {
  const items = [
    {name : "Tomatoes", price : 15, img : food0},
    {name : "Pasta", price : 32, img : food1},
    {name : "Coconut", price : 20, img : food2}
  ];

  return (
    <>
      <h4 className="title">상품목록</h4>
      { items.map(({name, price, img})=>(
        <div className="food" key={name}>
          <Image 
            src={img}
            className="food-image"
            width={100}
            height={100}
          />
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
      ))}
    </>
  )
}

export default page