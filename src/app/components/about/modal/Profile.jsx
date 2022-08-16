import React from "react";

// Sub-Components
import ProfileInformation from "../../../sub-components/modal/ProfileInformation";

// Assets
import BirthdaySvg from "../../../../assets/svg/profile/BirthdaySvg";
import ProfileSvg from "../../../../assets/svg/profile/ProfileSvg";
import CitySvg from "../../../../assets/svg/profile/CitySvg";
import EmailAdressSvg from "../../../../assets/svg/profile/EmailAdressSvg";
import LanguageSvg from "../../../../assets/svg/profile/LanguageSvg";
import HobbiesSvg from "../../../../assets/svg/profile/HobbiesSvg";

function Profile() {
  return (
    <>
      <div className="tab-panels-container">
        <div className="information-part">
          <ProfileInformation svg={<ProfileSvg />} text={"Kévin Marais"} />
          <ProfileInformation
            svg={<CitySvg />}
            text={"France, Loire-Atlantique, Nantes"}
          />
          <ProfileInformation
            svg={<BirthdaySvg />}
            text={"Né le 22 Décembre 1993, 28 ans"}
          />
          <ProfileInformation
            svg={<EmailAdressSvg />}
            text={"kevin.mrs2020@gmail.com"}
          />
          <ProfileInformation
            svg={<LanguageSvg />}
            text={"Français (Maternelle) | Anglais (Intermédiaire)"}
          />
          <ProfileInformation
            svg={<HobbiesSvg />}
            text={`Passionné par les technologies et le code, qui parfois nous font beaucoup réfléchir,
              Je libère mon esprit par quelques séances de fitness.
              J'aime reprendre des forces dans un bon restaurant (de préférence italien).
              Lorsque je le peux, je voyage, j'accorde beaucoup d'importance, à la découverte et la compréhention de nouvelles cultures, l'ouverture d'esprit et aux moments partagés.`}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
