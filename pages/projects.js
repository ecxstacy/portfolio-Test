import Layout from '../components/Layout'
import Image from 'next/image'
export default function Projects(){
  return (
    <Layout title="Projects — Patrick Nyutu Mbugua">
      <header style={{padding:24, background:'#f4f4f6', textAlign:'center'}}><h1>Projects</h1></header>
      <main style={{maxWidth:1100, margin:'24px auto', padding:'0 16px'}}>
        <section style={{marginBottom:28}}>
          <h2>Social Media Growth System</h2>
          <Image src="/images/project1.png" alt="project1" width={760} height={456} style={{borderRadius:8}} />
          <p>Optimized workflows and content calendars to increase engagement and simplify production.</p>
        </section>
        <section>
          <h2>Marketing Funnel Optimization</h2>
          <Image src="/images/project2.png" alt="project2" width={760} height={456} style={{borderRadius:8}} />
          <p>Data-driven funnel adjustments that increased conversion rates and improved lead quality.</p>
        </section>
      </main>
    </Layout>
  )
}
