import type { FC } from "react";
import { useTranslation } from "react-i18next";

import Policy from "../../modules/Policy/Policy";
import Wrapper from "../../shared/components/Wrapper/Wrapper";
import SectionLayout from "../../shared/components/SectionLayout/SectionLayout";

import { MAIL_TO } from "../../shared/data/contact.constants";

const PolicyPage: FC = () => {
  const { t } = useTranslation("policy");

  return (
    <>
      <Wrapper>
        <SectionLayout title={t("title")}>
          <Policy
            contactEmail={MAIL_TO}
            hostName="Vercel Inc."
            hostProvider="Vercel Inc. - 440 N Barranca Avenue #4133, Covina, CA 91723, United States"
            hostPrivacyUrl="https://vercel.com/legal/privacy-policy"
            mailName="Google Ireland Limited"
            mailProvider=", Gordon House, Barrow Street, Dublin 4, Irland"
            parenCompany="Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA"
            mailPrivacyUrl="https://policies.google.com/privacy"
          />
        </SectionLayout>
      </Wrapper>
    </>
  );
};

export default PolicyPage;
