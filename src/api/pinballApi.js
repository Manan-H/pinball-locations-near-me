import axios from "axios";

export const fetchNearMeLocations = async (lat, lon) =>
  await axios
    .get(
      `https://pinballmap.com/api/v1/locations/closest_by_lat_lon.json?lat=${lat}&lon=${lon}&max_distance=50&send_all_within_distance=1`
    )
    .then((response) => {
      let data = response.data;
      return response;
    });

let userLocation;
export const getUserLocation = async () => {
  userLocation = await axios
    .get("https://ipapi.co/json/")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  return userLocation;
};
