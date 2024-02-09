import Register from "@components/Auth/Register";
import IndividualRegister from "@components/Auth/Register";
import AuthLayout from "@components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Helpa - Crowdfunding Register Page</title>
        <meta
          name="description"
          content="Donate and raise funds easily with Helpa"
        />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>

      <Register />
    </>
  );
}

RegisterPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
