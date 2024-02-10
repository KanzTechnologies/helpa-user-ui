import Login from "@components/Auth/Login";
import AuthLayout from "@components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Helpa - Crowdfunding NGO Login Page</title>
        <meta
          name="description"
          content="Donate and raise funds easily with Helpa"
        />
        <link rel="icon" href="/images/png/favicon.png" />
      </Head>

      <Login type="NGO" />
    </>
  );
}

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
