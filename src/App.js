import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { darkTheme } from "./Theme/DarkTheme";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./State/Authentication/Action";
import { findCart } from "./State/Cart/Action";
import Routers from "./Routers/Routers";
import { getAllRestaurantByUserId } from "./State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(auth.jwt || jwt));
  }, [auth.jwt, dispatch, jwt]);

  useEffect(()=>{
    dispatch(getAllRestaurantByUserId(auth.jwt || jwt))
  },[auth.user])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
