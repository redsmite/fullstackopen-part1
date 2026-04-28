import { useState } from 'react';

const App = () => {
  const [step, setStep] = useState(0);
  const name = "Mary Rasheen Mendoza";
  const tag = "SHIN";

  const getStory = (currentStep) => {
    switch (currentStep) {
      case 0:
        return `Backstory:\n\nSi ${name} o "Shin", ay Administrative Assistant sa Procurement Section. Isang araw, niloko siya ng tawag na may urgent procurement deal na may kasamang modeling gig na may malaking bayad. Pumunta siyang mag-isa. Pagdating niya, bitag na pala.`;
      case 1:
        return `Agad siyang nasunggaban. Sinubukan niyang sumigaw pero mabilis na dinikit ang duct tape sa bibig niya. Tinalian ang mga kamay niya ng makapal na itim na lubid at itinaas pataas. Desperado siyang nagpupumiglas pero walang takas.`;
      case 2:
        return `Takot na takot si Shin. Puno ng luha ang mata niya habang napagtanto niyang selyado na ang kapalaran niya. Wala na siyang kawala — magiging alipin na siya ng libog ngayon.`;
      case 3:
        return `Hinila pataas ang itim niyang tank top. Nakita ang malaking bra niya. Simula nang pisilin at himasin ng captor ang malalaking suso ni Shin sa ibabaw ng tela habang umiiyak siya.`;
      case 4:
        return `Tinanggal ang bra niya. Hubad na ang malalaking puting suso ni Shin. Ginagapang, pinipisil, at pinipindot-pindot ang kanyang utong habang patuloy na umiiyak at nagpupumiglas si Shin. "Ang sarap ng suso mo, Shin..."`;
      case 5:
        return `Binaba ang pantalon niya. Pagkatapos ay hinubad ang panty. Hubad na hubad na si Shin. Ipinasok agad ng captor ang daliri sa mainit at basa niyang pekpek. "Putangina, ang sikip at masarap ng pekpek ni Shin!"`;
      case 6:
        return `Dinala ng captor ang mukha sa katawan ni Shin at sinimulang dilaan ang leeg, suso, at tiyan niya. "Ang bango at lambot ng katawan mo, gago..." Habang patuloy na umiiyak si Shin sa kahihiyan.`;
      case 7:
        return `Lumuhod ang captor at sinimulang kainin ang pekpek ni Shin. Matagal at malalim na dinilaan ang kanyang clit at butas. "Ang sarap ng pekpek mo, Shin! Ang tamis at ang init!" Nanginginig nang husto ang mga hita ni Shin habang sumisigaw sa duct tape.`;
      case 8:
        return `Pagkatapos na lasahin nang mabuti ang pekpek at suso ni Shin, tumayo ang captor. Humahangos at puno ng luha si Shin. Alam niyang malapit na siyang kantutin.`;
      case 9:
        return `Simula na ang panggagahasa. Idinikit ang ulo ng titi sa basang pekpek ni Shin at mariing ipinasok. "MMMMMPH!!!". Nanlaki ang mata ni Shin sa sakit habang unti-unting nalulunod ang kanyang masikip na pekpek sa malaking titi.`;
      case 10:
        return `Matindi at mabilis na kinantot si Shin. Bawat malalim na ulos ay nagpapaalog sa buong katawan niya. "Ang sikip ng pekpek mo, puta!" Habang patuloy na umiiyak si Shin.`;
      case 11:
        return `Paulit-ulit na ginahasa si Shin. Basag na basag na siya. Nakabitin na lang siyang parang basahan sa lubid, laway at luha ang tumutulo sa duct tape, habang patuloy na nilalabasan sa loob ng kanyang pekpek.`;
      default:
        return `Si ${name} ay ginahasa na nang ${currentStep - 8} beses. Nakabitin na lang siya nang walang buhay, puno ng tamod ang pekpek at hita niya. Wala na siyang kalaban-laban. Ang masarap na pekpek ni Shin ay ginawang laruan na lang.`;
    }
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const resetStory = () => {
    setStep(0);
  };

  const currentStory = getStory(step);
  const isNaked = step >= 5;

  return (
    <div style={{ 
      textAlign: "center", 
      margin: "40px auto",
      maxWidth: "740px",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#0a0a0a",
      color: "#eee",
      minHeight: "100vh"
    }}>
      
      {/* Shin's Image */}
      <div style={{ marginBottom: "30px" }}>
        <img 
          src="/shin-original.jpg" 
          alt="Shin bound and gagged"
          style={{
            width: "100%",
            maxWidth: "520px",
            borderRadius: "10px",
            border: "4px solid #600",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.9)"
          }}
        />
        <p style={{ marginTop: "12px", fontSize: "15px", color: "#999" }}>
          Mary Rasheen Mendoza — "SHIN" • Procurement Administrative Assistant
        </p>
      </div>

      <h1 style={{ color: "#c00", marginBottom: "10px" }}>SHIN — Bitag at Panggagahasa</h1>
      <p style={{ fontSize: "18px", marginBottom: "25px" }}>
        Hakbang <strong>{step}</strong> • {isNaked ? "Hubad na at Ginagahasa" : "May damit pa"}
      </p>

      {/* Story Display */}
      <div style={{
        backgroundColor: "#1a1a1a",
        color: "#ffdddd",
        padding: "28px 35px",
        borderRadius: "12px",
        minHeight: "220px",
        fontSize: "17.5px",
        lineHeight: "1.75",
        marginBottom: "35px",
        border: "3px solid #800",
        textAlign: "left",
        whiteSpace: "pre-line"
      }}>
        {currentStory}
      </div>

      <button 
        onClick={handleNext}
        style={{
          padding: "18px 60px",
          fontSize: "22px",
          backgroundColor: "#700",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        Magpatuloy — Kantutin si Shin
      </button>

      <br />

      <button 
        onClick={resetStory}
        style={{
          padding: "12px 35px",
          fontSize: "16px",
          backgroundColor: "#222",
          color: "#ccc",
          border: "1px solid #555",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        I-reset ang Kwento
      </button>
    </div>
  );
};

export default App;