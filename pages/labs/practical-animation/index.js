import Head from 'next/head';
import Heading from 'components/Heading';
import Container from 'components/Container';
import Attribution from 'components/Attribution';

import Content from './Content';

export default function PracticalAnimation() {
  return (
    <div className="flex flex-col min-h-screen bg-main relative overflow-hidden text-main">
      <Head>
        <title>Matthew Simo | Practical Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="main" className="w-full my-12 flex-grow">
        <Content />
      </Container>

      <Attribution className="absolute bottom-6 left-6 space-x-4 flex items-center" />
    </div>
  );
}
