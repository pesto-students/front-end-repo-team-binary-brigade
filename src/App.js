import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import redux component
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./app/redux/store";
import { persistStore } from "redux-persist";

import PageLoader from "./components/common/PageLoader";
import BaseLayout from "./components/Layout/BaseLayout";
// import Profile from "./pages/Profile";
// import CollegeLists from "./pages/CollegeLists";
// import CollegeDetails from "./pages/CollegeDetails";

// import page components
const PageNotFound = lazy(() => import("./pages/404"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const OtpVerify = lazy(() => import("./pages/OtpVerify"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const UserPage = lazy(() => import("./pages/UserPage"));
const CollegeDetails = lazy(() => import("./pages/CollegeDetails"));
const CollegeLists = lazy(() => import("./pages/CollegeLists"));
const Profile = lazy(() => import("./pages/Profile"));


// redux persist
const persistor = persistStore(store);

function App() {
  const routes = [
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/signup",
      component: <Signup />,
    },
    {
      path: "/forgotpassword",
      component: <ForgotPassword />,
    },
    {
      path: "/otpverify",
      component: <OtpVerify />,
    },
    {
      path: "/resetpassword",
      component: <ResetPassword />,
    },
    // add authenticated page route
    {
      path: "/",
      component: <UserPage />,
      authentication: true,
      page_title: "Feed",
    },
    {
      path: "/college/:id",
      component: <CollegeDetails />,
      authentication: true,
      page_title: "College Detail",
    },
    {
      path: "/colleges",
      component: <CollegeLists />,
      authentication: true,
      page_title: "Colleges",
    },
    {
      path: "/profile",
      component: <Profile />,
      authentication: true,
      page_title: "Colleges",
    },
    // 404 not found page
    {
      path: "*",
      component: <PageNotFound />,
    },
  ];

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.authentication ? (
                      <BaseLayout page_title={route.page_title}>
                        {route.component}
                      </BaseLayout>
                    ) : (
                      route.component
                    )
                  }
                />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
