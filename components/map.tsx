import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import useCoords from "@libs/client/useCoords";
import mapStyles from "@libs/client/mapStyles";
import useSWR from "swr";
import { Restaurant } from "@prisma/client";
import InfoMarker from "./info-marker";
import Reflash from "./reflash";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

export const defaultMapOptions = {
  clickableIcons: false,
  disableDefaultUI: true,
  styles: mapStyles,
};

export interface RestaurantResponse {
  ok: boolean;
  restaurants: Restaurant[];
}

const Map = () => {
  const { latitude, longitude } = useCoords();
  const center = useMemo(
    () => ({ lat: latitude!, lng: longitude! }),
    [latitude, longitude]
  );
  const [isMove, setIsMove] = useState(false);
  const [mapref, setMapRef] = useState(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const handleOnLoad = (map: any) => {
    setMapRef(map);
  };

  const { data } = useSWR<RestaurantResponse>(
    latitude && longitude
      ? `/api/restaurant?latitude=${latitude}&longitude=${longitude}`
      : null
  );

  const onDragEnd = () => {
    setIsMove(true);
  };

  useEffect(() => {
    if (data?.ok) {
      setRestaurants(data.restaurants);
    }
  }, [data]);

  return (
    <div className="absolute w-full h-full top-0 -z-50 max-w-xl">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}>
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyle}
          onLoad={handleOnLoad}
          center={center}
          zoom={17}
          onDragEnd={onDragEnd}
        >
          <Reflash
            isMove={isMove}
            setIsMove={setIsMove}
            setRestaurants={setRestaurants}
            mapref={mapref}
          />
          {data?.ok
            ? restaurants.map((restaurant) => (
                <InfoMarker data={restaurant} key={restaurant.id} />
              ))
            : null}
          <Marker
            position={center}
            icon={{
              path: "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z",
              fillColor: "#4185F4",
              fillOpacity: 1,
              scale: 0.03,
              strokeColor: "#FFFFFF",
              strokeWeight: 2,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(Map);
