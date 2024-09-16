import axios from "axios";

const fetchService = {
  getFeaturedProducts: async () => {
    const res = await axios.get(process.env.NEXT_URL + "/api");
    return res.data;
  },
  getCategories: async () => {
    const res = await axios.get(process.env.NEXT_URL + "/api/categories");
    return res.data;
  },
  getCategory: async (slug, params) => {
    const res = await axios.get(
      process.env.NEXT_URL + `/api/categories/${slug}`,
      { params },
    );
    return res.data;
  },
  getBigCategories: async () => {
    const res = await axios.get(process.env.NEXT_URL + "/api/big_category");
    return res.data;
  },
  getBigCategory: async (slug, params) => {
    const res = await axios.get(
      process.env.NEXT_URL + `/api/big_category/${slug}`,
      { params },
    );
    return res.data;
  },
  homeCategories: async (slug, params) => {
    const res = await axios.get(
      process.env.NEXT_URL + `/api/big_category/${slug}`,
      {
        params,
      },
    );
    return res.data;
  },
  getBrands: async () => {
    const res = await axios.get(process.env.NEXT_URL + "/api/brands");
    return res.data;
  },
  getBrand: async (slug, params) => {
    const res = await axios.get(process.env.NEXT_URL + `/api/brands/${slug}`, {
      params,
    });
    return res.data;
  },
  getProducts: async ({ ...params }) => {
    const res = await axios.get(process.env.NEXT_URL + "/api/products", {
      params,
    });
    return res.data;
  },
  getProduct: async (slug) => {
    const res = await axios.get(process.env.NEXT_URL + `/api/products/${slug}`);
    return res.data;
  },
  search: async (query) => {
    const res = await axios.get(process.env.NEXT_URL + "/api/search", {
      params: {
        query,
      },
    });
    return res.data;
  },

  sendMail: async (data) => {
    const res = await axios.post(process.env.NEXT_URL + "/api/contact", data);
    return res.data;
  },

  getMain: async () => {
    const res = await axios.get(process.env.NEXT_URL + "/api/main");
    return res.data;
  },
};

export default fetchService;
