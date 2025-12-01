import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(){
  return (
    <Layout>
      <header style={{padding:24, background:'#f4f4f6', textAlign:'center'}}>
        <h1 style={{margin:0}}>Patrick Nyutu Mbugua</h1>
        <p>Marketing Expert • Social Media Specialist • Problem Solver</p>
        <nav style={{marginTop:8}}>
          <Link href='/'><a style={{margin:'0 8px'}}>Home</a></Link>
          <Link href='/projects'><a style={{margin:'0 8px'}}>Projects</a></Link>
          <Link href='/about'><a style={{margin:'0 8px'}}>About</a></Link>
          <a href='mailto:nyutu4@gmail.com' style={{margin:'0 8px'}}>Contact</a>
        </nav>
      </header>

      <section style={{maxWidth:1100, margin:'28px auto', padding:'0 16px'}}>
        <div style={{display:'flex', gap:24, alignItems:'center'}}>
          <div style={{flex:1}}>
            <h2>Hi, I'm Patrick — I help brands grow online.</h2>
            <p>I build marketing systems, social strategies, and campaign frameworks that drive measurable growth.</p>
            <p><Link href='/projects'><a>See my work →</a></Link></p>
          </div>
          <div style={{width:320}}>
            <Image src="/images/hero-graphic.png" alt="Hero" width={320} height={200} style={{borderRadius:12}} />
          </div>
        </div>

        <h3 style={{marginTop:32}}>Selected Work</h3>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:20, marginTop:12}}>
          <div style={{padding:20, borderRadius:12, boxShadow:'0 6px 18px rgba(0,0,0,.06)'}}>
            <h4>Social Media Growth System</h4>
            <p>Optimized workflows and engagement systems to help brands scale online.</p>
          </div>
          <div style={{padding:20, borderRadius:12, boxShadow:'0 6px 18px rgba(0,0,0,.06)'}}>
            <h4>Marketing Funnel Optimization</h4>
            <p>Improved conversions through data-driven strategy and testing.</p>
          </div>
        </div>
      </section>

      <footer style={{textAlign:'center', padding:20, color:'#444'}}>
        © {new Date().getFullYear()} Patrick Nyutu Mbugua — <a href="/resume.pdf">Resume (PDF)</a>
      </footer>
    </Layout>
  )
}
