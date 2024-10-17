import React from "react";

//pages
import Groups from "../views/dashboard/app/groups";
import GroupDetail from "../views/dashboard/app/group-detail";
import CatergoryGrid from "../views/dashboard/store/store-category-grid";
import CatergoryList from "../views/dashboard/store/store-category-list";
import StoreDetail from "../views/dashboard/store/store-detail";
import StoreCheckout from "../views/dashboard/store/store-checkout";

//market and profile pages
import Profile1 from "../views/dashboard/profiles/profile1";

import ProductDetail from "../views/dashboard/store/product-detail";
import Chat from "../views/dashboard/app/chat";

export const Layout1Router = [
  {
    path: "dashboards/app/groups",
    element: <Groups />,
  },
  {
    path: "dashboards/app/chat",
    element: <Chat />,
  },
  {
    path: "dashboards/app/group-detail",
    element: <GroupDetail />,
  },
  {
    path: "dashboards/store/store-category-grid",
    element: <CatergoryGrid />,
  },
  {
    path: "dashboards/store/store-category-list",
    element: <CatergoryList />,
  },
  {
    path: "dashboards/store/store-detail",
    element: <StoreDetail />,
  },
  {
    path: "dashboards/store/store-checkout",
    element: <StoreCheckout />,
  },
  {
    path:'dashboards/store/product-detail',
    element:<ProductDetail/>
  },
  {
    path: "dashboards/profiles/profile1",
    element: <Profile1 />,
  }
];
