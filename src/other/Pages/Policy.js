import React from "react";
import CommonSection from "../../shared/components/UIElements/CommonSection";
import allTerms from "../../data/terms-and-conditions.json";
import allCanclePolicy from "../../data/cancle-policy.json";
import "./Policy.css";
const Policy = (props) => {
  return (
    <>
      <CommonSection
        heading={
          props.termCondition ? "Terms & Conditions" : "Cancellation Policy"
        }
      >
        {props.termCondition && (
          <ul>
            {allTerms.map((t, index) => (
              <li
                className="policy-list"
                key={index}
                dangerouslySetInnerHTML={{ __html: t.point }}
              />
            ))}
          </ul>
        )}

        {props.canclePolicy && (
          <span>
            {allCanclePolicy.map((t, index) => (
              <span
                className="policy-list"
                key={index}
                dangerouslySetInnerHTML={{ __html: t.point }}
              />
            ))}
          </span>
        )}
      </CommonSection>
    </>
  );
};

export default Policy;
