import { Route, Routes } from "react-router-dom";
import MainLayout from "components/layout";
import Explore from "pages/explore";
import Minting from "pages/Minting/Minting";
import Auction from "pages/auction";
// import Home from "pages/home";
import Collections from "pages/collections";
import MintingWFC from "pages/minting-wfc/MintingWFC";
import SettingProfile from "pages/setting/profile";
import SettingNotification from "pages/setting/notification";
import SettingDisplay from "pages/setting/display";
import Staking from "pages/staking/staking";
import Staking_hominid from "pages/staking/staking_hominid";
import Airdrop from "pages/airdrop";
import Profile from "pages/profile/Profile";
import Ranking from "pages/ranking/";
import Farm from "pages/farm/farm";
import Bridge from "pages/bridge/bridge";
import Manage from "pages/manage/Manage";
import DexTab from "pages/dex-tab/DexTab";
import Liquidity from "../pages/liquidity/Liquidity";
import Transfer from "pages/transfer/transfer";
import Redeem from "pages/transfer/redeem";
import History from "pages/transfer/history";
import NFTList from "pages/nftlist";
import Swap from "pages/swap/swap";
import Home from "pages/home";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/minting-wfc" element={<MintingWFC />} />
        <Route path="/minting" element={<Minting />} />
        <Route
          path="/auction"
          element={
            <Auction
              name="Hominids"
              current={1672}
              hour="08"
              min="23"
              sec="06"
              lastBid="JDHWSJ_01"
            />
          }
        />
        <Route path="/collections" element={<Collections />} />
        <Route path="/settings" element={<SettingProfile />} />
        <Route
          path="/settings/notification"
          element={<SettingNotification />}
        />
        <Route path="/settings/display" element={<SettingDisplay />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/staking/hominid" element={<Staking_hominid />} />
        <Route path="/airdrop" element={<Airdrop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/farm" element={<Farm />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/dex-tab" element={<DexTab />} />
        <Route path="/liquidity" element={<Liquidity />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transfer/redeem" element={<Redeem />} />
        <Route path="/transfer/history" element={<History />} />
        <Route path="/nftlist" element={<NFTList />} />
        <Route path="/swap" element={<Swap />} />
      </Route>
      <Route path="*" element={<>Page not found</>} />
    </Routes>
  );
};

export default MainRouter;
