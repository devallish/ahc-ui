import React, { useLayoutEffect, useState, Fragment } from "react";
import { useParams } from "react-router";
import { getPracticeById, Practice } from "../../../services/practice-service";

const PracticeView = () => {
  const { id } = useParams();
  const [practice, setPractice] = useState<Practice | undefined>(undefined);
  useLayoutEffect(() => {
    if (id) {
      const practiceFound = getPracticeById(id);
      setPractice(practiceFound);
    }
  }, [id]);
  return (
    <Fragment>
      {practice && (
        <div>
          <h2>{practice.name} {practice.id}</h2>
          <h3>Address</h3>
          <p>{practice.address.line1}</p>
          <p>{practice.address.line2}</p>
          <p>{practice.address.postcode}</p>
          <p>{practice.address.county}</p>
        </div>
      )}
    </Fragment>
  );
};

export default PracticeView;
