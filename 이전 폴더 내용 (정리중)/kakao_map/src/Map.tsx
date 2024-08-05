import React, { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const location = {
  lat: 34.819,
  lng: 128.439,
};

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https:////dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_MAP_KEY
    }&autoload=false`;
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng
        );
        const options = {
          center: position,
          level: 3,
        };
        const marker = new window.kakao.maps.Marker({
          position,
        });
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        marker.setMap(map);
      });
    };
  }, [location]);

  return (
    <Container>
      <div ref={mapContainer} style={{ width: "100%", height: "250px" }} />
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 250px;
`;

export default Map;
