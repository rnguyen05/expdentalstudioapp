import React from "react";
import Dentist from "../img/dentist.jpg";
import AGD from "../img/network/AGD.png";
import ADAWhite from "../img/network/ADAWhite.png";
import ADSA from "../img/network/ADSA.png";
import Cerec from "../img/network/Cerec.png";
import CLC from "../img/network/CLC.png";
import NVD from "../img/network/NVD.png";
import SDD from "../img/network/SDD.png";
import WSDA from "../img/network/WSDA.png";
import { Container, Row, Col } from "reactstrap";
import "./about.css";

const AboutUs = () => {
  return (
    <div id="id-about">
      <Row className="row section-about">
        <Container className="bsz-content">
          <Row>
            <Col className="dentist-img">
              <img src={Dentist} alt="Dentist" />
            </Col>
            <Col className="dentist-about">
              <h2 className="h2-white clearfix">Victor Truong, DDS</h2>
              <p className="p-white">
                Dr. Victor Truong grew up in the Bay Area and have lived in
                Central Contra Costa County since 1992. He earned his Doctorate
                of Dental Surgery (DDS) from the University of California San
                Francisco (UCSF), perennially recognized as one of the top
                dental schools in the nation. Dr. Victor strongly believes in
                forming a trusted patient-doctor relationship through patient
                education and dental care that restores the patient’s oral
                health as well as the patient’s overall health. Dr. Victor also
                believes in strong family values and will never treat you like
                just another patient but as part of the dental family at The
                Grove Family Dentistry, catering to your individual needs and
                providing the care that you deserve. When not in the office, Dr.
                Victor enjoys spending time with his wife Mary and their 2 kids,
                Kaylie and Brayden. They keep him active on bike rides, monkey
                bar races, long walks, and building an entire lego town. Dr.
                Victor also enjoys photography, basketball, tennis, football and
                is a passionate and faithful fan of the 49ers, SF Giants, and
                the GS Warriors. Dr. Victor and his talented and professional
                team at The Grove Family Dentistry provides your entire family
                with a unique dental experience consisting of comprehensive,
                personalized, and quality care in a relaxing and stress free
                environment where you are treated as our guests. With our
                convenient hours, financial options, amenities like you’ll find
                at home, we make it easy to fit dental care into your family’s
                busy schedule. We invite you to join the family at the Grove
                Family Dentistry and look forward to serving your oral health
                care needs and sharing a few stories along the way.
              </p>
              <p className="mt-5">
                <img className="network" src={AGD} alt="Network" />
                <img className="network" src={ADAWhite} alt="Network" />
                <img className="network" src={ADSA} alt="Network" />
                <img className="network" src={SDD} alt="Network" />
                <img className="network2" src={Cerec} alt="Network" />
                <img className="network2" src={WSDA} alt="Network" />
                <img className="network3" src={CLC} alt="Network" />
                <img className="network3" src={NVD} alt="Network" />
              </p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="wrap-content">
        <div>
          <h2 className="h2-white clearfix text-center">Victor Truong, DDS</h2>
          <img className="dentist-img" src={Dentist} alt="Dentist" />
        </div>
        <div className="wrap-paragraph">
          <p className="p-white">
            Dr. Victor Truong grew up in the Bay Area and have lived in Central
            Contra Costa County since 1992. He earned his Doctorate of Dental
            Surgery (DDS) from the University of California San Francisco
            (UCSF), perennially recognized as one of the top dental schools in
            the nation. Dr. Victor strongly believes in forming a trusted
            patient-doctor relationship through patient education and dental
            care that restores the patient’s oral health as well as the
            patient’s overall health. Dr. Victor also believes in strong family
            values and will never treat you like just another patient but as
            part of the dental family at The Grove Family Dentistry, catering to
            your individual needs and providing the care that you deserve. When
            not in the office, Dr. Victor enjoys spending time with his wife
            Mary and their 2 kids, Kaylie and Brayden. They keep him active on
            bike rides, monkey bar races, long walks, and building an entire
            lego town. Dr. Victor also enjoys photography, basketball, tennis,
            football and is a passionate and faithful fan of the 49ers, SF
            Giants, and the GS Warriors. Dr. Victor and his talented and
            professional team at The Grove Family Dentistry provides your entire
            family with a unique dental experience consisting of comprehensive,
            personalized, and quality care in a relaxing and stress free
            environment where you are treated as our guests. With our convenient
            hours, financial options, amenities like you’ll find at home, we
            make it easy to fit dental care into your family’s busy schedule. We
            invite you to join the family at the Grove Family Dentistry and look
            forward to serving your oral health care needs and sharing a few
            stories along the way.
          </p>
          <p className="mt-2 text-center">
            <img className="network" src={AGD} alt="Network" />
            <img className="network" src={ADAWhite} alt="Network" />
            <img className="network" src={ADSA} alt="Network" />
            <img className="network" src={SDD} alt="Network" />
            <img className="network2" src={Cerec} alt="Network" />
            <img className="network2" src={WSDA} alt="Network" />
            <img className="network3" src={CLC} alt="Network" />
            <img className="network3" src={NVD} alt="Network" />
          </p>
        </div>
      </Row>
    </div>
  );
};

export default AboutUs;
