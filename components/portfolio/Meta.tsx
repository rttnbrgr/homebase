import React from "react";
import Head from "next/head";
import Meta from "../../components/meta";

type Props = {
  title: string;
  preview?: boolean;
};

const PortfolioMeta = ({ preview, title }: Props) => {
  return (
    <>
      <Meta />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{`${title} | R T T N B R G `}</title>
      </Head>
    </>
  );
};

PortfolioMeta.defaultProps = {
  title: "Portfolio"
};

export default PortfolioMeta;
