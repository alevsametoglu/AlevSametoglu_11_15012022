import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Host, Slider, Collapsible } from "../components";
import "./AnnouncePage.scss";
import Api from "../Api/Api";

const AnnouncePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [announce, setAnnounce] = useState();

  useEffect(() => {
    const _announce = Api.getDataById(params.id);
    setAnnounce(_announce);
    if (!_announce) navigate("/error");
  }, [params.id]);

  return !!announce ? (
    <div className="announce-page">
      <Slider images={announce.pictures} />
      <div className="announce-infos">
        <Host
          name={announce.host.name}
          cover={announce.host.picture}
          rating={announce.rating}
          tags={announce.tags}
          title={announce.title}
          location={announce.location}
        />
      </div>
      <div className="announce-collapsible">
        <Collapsible
          title="Description"
          description={announce.description}
          radius={10}
        />
        <Collapsible
          title="Équipements"
          description={announce.equipments.join("\n")}
          radius={10}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AnnouncePage;
