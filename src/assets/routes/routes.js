import { lazy } from "react";
// eslint-disable-next-line
export default [
  {
    path: "/",
    label: "MainPage",
    exact: true,
    component: lazy(() => import("../../pages/MainPage/MainPage")),
  },
  {
    path: "/search",
    label: "SearchPage",
    exact: true,
    component: lazy(() => import("../../pages/SearchPage/SearchPage")),
  },
  {
    path: "/artist/:id",
    label: "ArtistInfoPage",
    exact: true,
    component: lazy(() => import("../../pages/ArtistPage/ArtistPage")),
  },
  {
    path: "/artist/",
    label: "ArtistNotFound",
    exact: true,
    component: lazy(() => import("../../pages/ArtistPage/ArtistNotFound")),
  },
];
