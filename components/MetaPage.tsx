import Head from "next/head";

type MetaPageProps = {
  title: string;
  titleSuffix?: boolean;
};

const MetaPage = ({
  title = "Page Name",
  titleSuffix = true,
}: MetaPageProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {titleSuffix ? (
        <title>{title} | R T T N B R G R</title>
      ) : (
        <title>{title}</title>
      )}
    </Head>
  );
};

export default MetaPage;
