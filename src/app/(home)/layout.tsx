import { ReactNode } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { getProfile } from "@/services/getProfile";

const layout = async ({ children }: { children: ReactNode }) => {
  const profileData = await getProfile();

  return (
    <>
      <Header profileData={profileData[0]} />
      {children}
      <Footer profileData={profileData[0]} />
    </>
  );
};

export default layout;
