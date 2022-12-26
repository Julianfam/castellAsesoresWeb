import Slider from '@components/Slider';
import ProductList from '@containers/ProductList';
import Footer from '@components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJsShop</title>
      </Head>
      <Slider />
      <ProductList />
      <Footer />
    </>
  );
}
