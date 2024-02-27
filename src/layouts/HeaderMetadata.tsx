import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Virgo&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Virgo Fajar Pamungkas, Web Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Virgo Fajar Pamungkas. A Web Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Virgo Fajar Pamungkas"
      />

      <link
        rel="icon"
        href="/assets/images/favicon.png"
      />
    </Head>
  );
}
