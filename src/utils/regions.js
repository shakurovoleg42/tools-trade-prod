import axios from "axios";

const fetchRegions = async () => {
  const res = await axios.get(process.env.NEXT_URL + "/api/regions");
  return res.data;
};

const fetchRegionByCode = async (code) => {
  const regions = await fetchRegions();
  return regions[code];
};

export { fetchRegions, fetchRegionByCode };
