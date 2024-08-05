import PageSearch from "@pages/search";
import PageTrade from "@pages/trade";
import PageTradeNew from "@pages/trade-new";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PageTrade />} />
      <Route path="/search" element={<PageSearch />} />
      <Route path="/trade/new" element={<PageTradeNew />} />
    </Routes>
  );
};

export default Router;
