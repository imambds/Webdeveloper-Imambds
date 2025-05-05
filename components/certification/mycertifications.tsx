import React from "react";
import { certifications } from "./certificationData";
import CertificationCard from "./CertificationCard";

export default function MyCertifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <CertificationCard
          key={cert.id}
          title={cert.title}
          issuedBy={cert.issuedBy}
          date={cert.date}
          image={cert.image}
        />
      ))}
    </div>
  );
}
