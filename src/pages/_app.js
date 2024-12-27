import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import NoSsr from '@/components/NoSsr';


export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <NoSsr>
      <MainLayout pageProps={pageProps}>
        <Component {...pageProps} />
      </MainLayout>
    </NoSsr>
  )
}
