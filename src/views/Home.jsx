import React from "react";
import Text from "../compontents/Text/Text";
import useLetter from "../customHooks/useLetter";
import Declaration from "../compontents/declaration/Declaration";

const Home = () => {
  const letters = useLetter();
  return (
    <>
    { letters !== undefined  && <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="w-full h-full px-[20px] flex items-center justify-center">
        <Text className="text-white w-full text-[25px] text-center font-love">
          {letters}
        </Text>
      </div>
    </div>}
    {
      letters === undefined && <Declaration />
    }
    </>
  );
};
export default Home;
