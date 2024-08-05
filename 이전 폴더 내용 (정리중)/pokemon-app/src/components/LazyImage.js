import { useEffect, useState } from "react"
import styled from "styled-components";


const Img = styled.img`
  width : 100%;
  height : 100%;
  object-fit : contain;
  opacity : ${props => props.opacity}
`;


export const LazyImage = ({ url, alt })=>{
  const [Loads, setLoads] = useState(true);
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(()=>{
    Loads ? setOpacity(0) : setOpacity(100)
  }, [Loads])
  
  return(
    <>
      {
        Loads && (
          <div>
            ...loading
          </div>
        )
      }
      <Img
        src={url}
        alt={alt}
        loading="lazy"
        opacity={opacity}
        onLoad={()=>setLoads(false)}
      />
    </>
  )
}