import { useState } from "react";
import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  LoadScript,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import useCoords from "@libs/client/useCoords";
import mapStyles from "@libs/client/mapStyles";
import useSWR from "swr";
import { Restaurant } from "@prisma/client";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const defaultMapOptions = {
  clickableIcons: false,
  disableDefaultUI: true,
  styles: mapStyles,
};

interface RestaurantResponse {
  ok: boolean;
  restaurants: Restaurant[];
}

const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2) - 40,
});

const Map = () => {
  const { latitude, longitude } = useCoords();
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  const { data } = useSWR<RestaurantResponse>("/api/restaurant");
  return (
    <div className="absolute w-full h-full top-0 -z-50 max-w-xl">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!}
        onLoad={() => createOffsetSize()}
      >
        <GoogleMap
          options={defaultMapOptions}
          mapContainerStyle={containerStyle}
          center={{ lat: latitude!, lng: longitude! }}
          zoom={17}
        >
          {data?.ok
            ? data.restaurants.map((restaurant) => (
                <div key={restaurant.id}>
                  <Marker
                    position={{
                      lat: +restaurant.latitude,
                      lng: +restaurant.longitude,
                    }}
                  />
                  <OverlayView
                    position={
                      {
                        lat: +restaurant.latitude,
                        lng: +restaurant.longitude,
                      } as any
                    }
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    getPixelPositionOffset={getPixelPositionOffset}
                  >
                    <div className="bg-slate-100 px-2 py-2  border-orange-500 border-2 rounded-2xl ">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full bg-orange-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-6 h-6 p-1 fill-slate-100"
                          >
                            <path d="M221.6 148.7C224.7 161.3 224.8 174.5 222.1 187.2C219.3 199.1 213.6 211.9 205.6 222.1C191.1 238.6 173 249.1 151.1 254.1V472C151.1 482.6 147.8 492.8 140.3 500.3C132.8 507.8 122.6 512 111.1 512C101.4 512 91.22 507.8 83.71 500.3C76.21 492.8 71.1 482.6 71.1 472V254.1C50.96 250.1 31.96 238.9 18.3 222.4C10.19 212.2 4.529 200.3 1.755 187.5C-1.019 174.7-.8315 161.5 2.303 148.8L32.51 12.45C33.36 8.598 35.61 5.197 38.82 2.9C42.02 .602 45.97-.4297 49.89 .0026C53.82 .4302 57.46 2.303 60.1 5.259C62.74 8.214 64.18 12.04 64.16 16V160H81.53L98.62 11.91C99.02 8.635 100.6 5.621 103.1 3.434C105.5 1.248 108.7 .0401 111.1 .0401C115.3 .0401 118.5 1.248 120.9 3.434C123.4 5.621 124.1 8.635 125.4 11.91L142.5 160H159.1V16C159.1 12.07 161.4 8.268 163.1 5.317C166.6 2.366 170.2 .474 174.1 .0026C178-.4262 181.1 .619 185.2 2.936C188.4 5.253 190.6 8.677 191.5 12.55L221.6 148.7zM448 472C448 482.6 443.8 492.8 436.3 500.3C428.8 507.8 418.6 512 408 512C397.4 512 387.2 507.8 379.7 500.3C372.2 492.8 368 482.6 368 472V352H351.2C342.8 352 334.4 350.3 326.6 347.1C318.9 343.8 311.8 339.1 305.8 333.1C299.9 327.1 295.2 320 291.1 312.2C288.8 304.4 287.2 296 287.2 287.6L287.1 173.8C288 136.9 299.1 100.8 319.8 70.28C340.5 39.71 369.8 16.05 404.1 2.339C408.1 .401 414.2-.3202 419.4 .2391C424.6 .7982 429.6 2.62 433.9 5.546C438.2 8.472 441.8 12.41 444.2 17.03C446.7 21.64 447.1 26.78 448 32V472z" />
                          </svg>
                        </div>
                        <h1>{restaurant.name}</h1>
                      </div>
                    </div>
                  </OverlayView>
                </div>
              ))
            : null}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
