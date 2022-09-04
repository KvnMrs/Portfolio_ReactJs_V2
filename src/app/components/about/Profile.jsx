import React from "react";

// Sub-Components
import ProfileInformation from "../../sub-components/modal/ProfileInformation";

// Assets
import BirthdaySvg from "../../../assets/svg/profile/BirthdaySvg";
import ProfileSvg from "../../../assets/svg/profile/ProfileSvg";
import CitySvg from "../../../assets/svg/profile/CitySvg";
import EmailAdressSvg from "../../../assets/svg/profile/EmailAdressSvg";
import LinkedinSvg from "../../../assets/svg/profile/LinkedinSvg";
import GithubSvg from "../../../assets/svg/profile/GithubSvg";
import PhoneSvg from "../../../assets/svg/profile/PhoneSvg";
import LanguageSvg from "../../../assets/svg/profile/LanguageSvg";
import HobbiesSvg from "../../../assets/svg/profile/HobbiesSvg";

function Profile() {
  return (
    <>
      {/* <div className=""></div> */}

      <div className="content-profile">
        <div className="profile-infos-contact">
          <div className="infos-contact-cards">
            <h1 className="profile-card-titles">Infos</h1>
            <ProfileInformation svg={<ProfileSvg />} text={"Kévin Marais"} />
            <ProfileInformation
              svg={<CitySvg />}
              text={"Nantes, Loire-Atlantique, France"}
            />
            <ProfileInformation
              svg={<BirthdaySvg />}
              text={"Né le 22 Décembre 1993, 28 ans"}
            />
            <ProfileInformation
              svg={<LanguageSvg />}
              text={"Français (Maternelle) | Anglais (Intermédiaire)"}
            />
          </div>
          <div className="infos-contact-cards">
            <h1 className="profile-card-titles">Contact</h1>
            <ProfileInformation
              svg={<EmailAdressSvg />}
              text={"kevin.mrs2020@gmail.com"}
            />
            <ProfileInformation svg={<PhoneSvg />} text={"07.82.18.54.35"} />
            <ProfileInformation
              svg={<LinkedinSvg />}
              text={"https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/"}
            />
            <ProfileInformation
              svg={<GithubSvg />}
              text={"https://github.com/KvnMrs"}
            />
          </div>
        </div>
        <div className="profile-hobbies">
          <h1 className="profile-card-titles">Centres d'intêret</h1>
          <ProfileInformation
            svg={<HobbiesSvg />}
            text={`Passionné par les technologies et le code, qui parfois nous font beaucoup réfléchir,
              Je libère mon esprit par quelques séances de fitness.Passionné par les technologies et le code, qui parfois nous font beaucoup réfléchir,
              Je libère mon esprit par quelques séances de fitness.
              `}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
