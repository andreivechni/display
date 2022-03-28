const env = process.env.NODE_ENV;
let BASE_URL = "";

if (env == "development") {
  BASE_URL = "http://localhost:3001";
}

const ROUTES = {
  home: "/",
  about: "/about",
  work: "/work",
  contact: "/contact",
};

const PROJECT_CATEGORIES = ["print", "photography", "web", "applications"];

export { ROUTES, BASE_URL, PROJECT_CATEGORIES };
