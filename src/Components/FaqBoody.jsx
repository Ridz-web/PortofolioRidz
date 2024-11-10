import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqBody = () => {
  return (
    <div>
      <Accordion sx={{ backgroundColor: "rgb(39 39 42)", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header">
          Apa itu coding
        </AccordionSummary>
        <AccordionDetails>
          Coding menurut saya adalah sebuah cara kita menuliskan kode atau
          syntaks yang tujuanya untuk membuat sebuah program yang dapat
          digunakan dan dimanfaatkan oleh orang orang
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgb(39 39 42)", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header">
          Tapi aku gak punya laptop?
        </AccordionSummary>
        <AccordionDetails>
          Di era sekarang kita bisa coding cuman lewat hp dengan menggunakan
          aplikasi yang bernama Acode sebagai code editor dan juga termux
          sebagai aplikasi terminal untuk menjalankan program program yang
          memerlukan terminal seperi reactjs
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgb(39 39 42)", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header">
          Gimana cara cepat belajarnya?
        </AccordionSummary>
        <AccordionDetails>
          Sebenarya cara paling cepat adalah konsisten belajar, buat jadwal
          belajar dan tentukan dari awal tujuan serta bahasa pemograman yang
          ingin dipelajari, karena semua dimulai dari bagaimana niat kita
          belajar
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgb(39 39 42)", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header">
          Harus mulai darimana?
        </AccordionSummary>
        <AccordionDetails>
          untuk pemula yang benar benar baru terjun di dunia programming kalian
          bisa mencoba mempelajari tentang bagaimana cara membuat website,
          diawali dengan belajar html,css dan kalian bisa melanjutkan antara
          JavaScript atau PHP dan lalu mencoba menggunakan framework framework
          seperti Reactjs, tailwindcss, Laravel Dan lain lain
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "rgb(39 39 42)", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header">
          Biaya Yang Mahal?
        </AccordionSummary>
        <AccordionDetails>
          sekarang banyak platform platform internet yang menyediakna informasi
          dari berbagai bahasa pemograman admin sendiri cuman belajar lewat
          youtube lo pada saat website ini dibuat, jadi Tunggu Apa Lagi?
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqBody;
