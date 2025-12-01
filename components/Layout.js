import Head from 'next/head'
export default function Layout({children, title='Patrick Nyutu Mbugua — Portfolio'}){
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio of Patrick Nyutu Mbugua — Marketing Expert, Social Media Specialist, Problem Solver" />
      </Head>
      <main>{children}</main>
    </div>
  )
}
