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

function Profile() {
  return (
    <>
      <div className="modal-profile">
        <div className="profile-infos-contact-part">
          <div className="profile-infos-contact-surface">
            <h2 className="profile-titles">Infos</h2>
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
          <div className="profile-infos-contact-surface">
            <h2 className="profile-titles">Contact</h2>
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
        <div className="profile-hobbies-part">
          <h2 className="profile-titles">Centres d'intêret</h2>
          <ProfileInformation
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
