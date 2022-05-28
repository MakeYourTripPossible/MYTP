import { createContext } from "react";
export const dataContext = createContext({
  contacts: () => {},
  allPlaces: () => {},
  allBlogs: () => {},
  allService: () => {},
  serviceType: () => {},
});
