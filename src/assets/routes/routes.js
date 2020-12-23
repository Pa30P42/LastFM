import { lazy } from "react";

export default [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() => import("../../pages/MainPage/MainPage")),
    // restricted: false,
    // private: false,
  },
  {
    path: "/search",
    label: "SearchPage",
    exact: true,
    component: lazy(() => import("../../pages/SearchPage/SearchPage")),

    // restricted: false,
    // private: false,
  },
  {
    path: "/artist",
    label: "ArtistInfoPage",
    exact: true,
  },
];
