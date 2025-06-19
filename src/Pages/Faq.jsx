import React from "react";
import HeaderFaq from "../Components/HeaderFaq";
import FaqBody from "../Components/FaqBoody";
import FaqFooter from "../Components/FaqFooter";

const Faq = () => {
  return (
    <>
      <div className="bg-zinc-700 bg-[url('./assets/Header/FaqBG.jpg')] lg:bg-fixed bg-cover h-[80vh]">
        <HeaderFaq />
      </div>
      <div className='bg-zinc-800'>
        <FaqBody />
      </div>
      <div className='bg-zinc-800 h-[110vh] lg:h-[80vh]'>
        <FaqFooter />
      </div>
    </>
  );
};

export default Faq;
