"use client";

import React, { Fragment, useContext } from "react";
import { LanguageContext } from "../../context/language";

const UserPage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Fragment>
      <div className='mt-[58.4px] md:mt-[72px]'>{lang.homePage}</div>
    </Fragment>
  );
};

export default UserPage;
