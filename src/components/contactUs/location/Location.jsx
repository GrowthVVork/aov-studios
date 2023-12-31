import * as React from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import { CircularProgress } from "@mui/material";
import mapLarge from "../../../assets/map/map-large.png";
import mapSmall from "../../../assets/map/map-small.png";
import { CommonHeading, CommonText, CommonWrapper } from "../../Shared.styles";
import { Email, MapWrapper } from "./Location.styles";

export const Location = () => {
  // const containerStyle = {
  //   width: "100%",
  //   height: 300,
  // };

  // const center = {
  //   lat: 22.73223246787647,
  //   lng: 75.85844404914533,
  // };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  // });

  return (
    <CommonWrapper>
      <CommonHeading>Our Office</CommonHeading>
      <MapWrapper>
        {/* {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <CircularProgress color="inherit" />
        )} */}
        <a
          href="https://www.google.com/maps/search/Ram%20Bagh/@22.73183250427246,75.85869598388672,17z?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <source srcSet={mapLarge} media="(min-width: 53rem)" />
          <img width="100%" src={mapSmall} alt="" />
        </a>
      </MapWrapper>
      <CommonText style={{ fontWeight: "bold" }}>AOV Studios</CommonText>
      <CommonText>Narayan Bagh, Indore (452007)</CommonText>
      <CommonText style={{ paddingBottom: "1rem" }}>MP, IN</CommonText>
      <CommonText>+91-7582898292</CommonText>
      <Email href="mailto:studiosaov@gmail.com">studiosaov@gmail.com</Email>
    </CommonWrapper>
  );
};
