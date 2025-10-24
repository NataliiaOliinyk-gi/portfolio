import type { FC } from "react";

import Policy from "../../modules/Policy/Policy";
import Wrapper from "../../shared/components/Wrapper/Wrapper";

import styles from "../../modules/Policy/Policy.module.css"

const PolicyPage: FC = () => {
  return (
    <main>
      <Wrapper>
        <Policy
          hostName="ALL-INKL.COM"
          hostProvider="ALL-INKL.COM - Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf"
          hostPrivacyUrl="https://all-inkl.com/datenschutzinformationen/"
          className={styles.policy} // приклад класів під стилі
        />
      </Wrapper>
    </main>
  );
};

export default PolicyPage;
