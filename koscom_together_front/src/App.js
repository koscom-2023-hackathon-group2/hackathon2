import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/MainLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import Price from "./pages/Price";
import History from "./pages/History";
import StockHistory from "./pages/StockHistory";
import SubLayout from "./components/SubLayout";
import Asset from "./pages/Asset";
import NewAccount from "./pages/NewAccount";

import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";
import { useEffect } from "react";
import { API_URL } from "./config";
import axios from "axios";

function App() {
  const EventSource = EventSourcePolyfill || NativeEventSource;

  useEffect(() => {
    // const fetchSSE = async () => {
    //   const sse = new EventSourcePolyfill(`${API_URL}/invite?host=jiye1`);
    //   console.log(sse);
    //   // dummy data
    //   sse.addEventListener("connect", (e) => {
    //     const { data: receivedConnectData } = e;
    //     console.log("connect event data: ", receivedConnectData);
    //   });
    //   sse.addEventListener("invite", (e) => {
    //     const { data: receivedCount, data: receive2 } = e;
    //     // setData(JSON.parse(receivedSections));
    //     console.log("count event data", receivedCount, receive2);
    //     // setCount(receivedCount);
    //   });
    // };
    // fetchSSE();
    let eventSource;
    const fetchSse = async () => {
      try {
        eventSource = new EventSource(`${API_URL}/invite?host=jiye1`, {
          headers: {},
          withCredentials: true,
        });

        /* EVENTSOURCE ONMESSAGE ---------------------------------------------------- */
        eventSource.onmessage = async (event) => {
          const res = await event.data;
          console.log(res);
        };

        /* EVENTSOURCE ONERROR ------------------------------------------------------ */
        eventSource.onerror = async (event) => {
          // if (!event.error.message.includes("No activity")) eventSource.close();
          console.log(event);
        };
      } catch (error) {}
    };
    fetchSse();
    return () => eventSource.close();
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/balance" element={<Balance />} />
            <Route path="/price" element={<Price />} />
            <Route path="/history" element={<History />} />
          </Route>
          <Route element={<SubLayout />}>
            <Route path="/new" element={<NewAccount />} />
            <Route path="/asset/:no" element={<Asset />} />
            <Route path="/stockHistory/:no" element={<StockHistory />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
