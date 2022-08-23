import Head from "next/head";

export default function Header() {
  const year = new Date().getFullYear() - 2010;

  return (
    <Head>
      <meta property="og:locale" content="pt_BR" />
      <title>Filipe Coutinho » Front-end Developer</title>
      <meta property="og:url" key="og:url" content="https://coutz.com.br/" />
      <meta
        property="og:site_name"
        key="og:site_name"
        content="Filipe Coutinho » Front-end Developer"
      />
      <meta
        property="og:title"
        key="og:title"
        content="Filipe Coutinho » Front-end Developer"
      />
      <meta
        property="og:description"
        key="og:description"
        content={`Sou programador sênior fullstack com ${year} anos de experiência, tendo participado e/ou liderado mais de 300 projetos web ao longo desses anos.`}
      />
      <meta
        name="twitter:title"
        key="twitter:title"
        content="Filipe Coutinho » Front-end Developer"
      />
      <meta
        name="twitter:description"
        key="twitter:description"
        content={`Sou programador sênior fullstack com ${year} anos de experiência, tendo participado e/ou liderado mais de 300 projetos web ao longo desses anos.`}
      />
      <meta
        name="twitter:image:alt"
        key="twitter:image:alt"
        content="Filipe Coutinho » Front-end Developer"
      />
      <meta name="twitter:url" content="https://coutz.com.br/" />
      <link rel="canonical" href="https://coutz.com.br/" />
      <meta
        name="description"
        content={`Sou programador sênior fullstack com ${year} anos de experiência, tendo participado e/ou liderado mais de 300 projetos web ao longo desses anos.`}
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:image"
        content="/opengraph.webp"
      />
      <meta
        property="og:image:url"
        content="/opengraph.webp"
      />
      <meta
        name="twitter:image"
        content="/opengraph.webp"
      />
    </Head>
  );
}
