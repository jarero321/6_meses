import { Carousel } from "3d-react-carousal";
import { useState } from "react";
import { photos_array } from "../../data/data";
import { description } from "../../data/description";
import { title } from "../../data/title";

const Declaration = () => {
  const [start, setStart] = useState(false);
  const [warn, setWarn] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-black px-[20px] py-[40px] ">
      {!start ? (
        <div className="w-full h-screen flex flex-col gap-[12px] items-center justify-center">
          <p className="font-love text-white text-[30px]">
            Esta es nuestra historia
          </p>
          <div>
            <p className="font-love text-white text-[14px]">
              Aceptas a seguir haciendo recuerdos inolvidables?
            </p>
          </div>
          <div className="w-full px-[24px] flex justify-center items-center gap-[40px]">
            <div
              className="font-love text-white text-[14px]"
              onClick={() => setStart(true)}
            >
              SI
            </div>
            <div
              className="font-love text-white text-[14px]"
              onClick={() => setWarn(true)}
            >
              NO
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="font-love text-white text-[30px]">
            Esta es nuestra historia
          </p>
          <div className="py-[20px]">
            <div className="h-full">
              <Carousel
                slides={photos_array.map((item, index) => (
                  <div>
                    <img src={item} />
                    <p className="font-love text-white text-[14px] pt-[20px]">
                      Desliza y recuerda conmigo cada momento
                    </p>
                    <p className="font-love text-white text-[24px] pt-[20px]">
                      {title[index] ?? ""}
                    </p>
                    <p className="font-love text-white text-[12px] pt-[14px]">
                      {description[index] ?? ""}
                    </p>
                  </div>
                ))}
                arrows={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Declaration;
