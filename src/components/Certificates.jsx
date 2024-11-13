import CertificatesCard from "./CertificatesCard"

const certificates = [
    {
        imgSrc: '/images/crtificadoDesarrolloweb.jpg',
        title: 'Desarrollo Web Flex',
        tags: ['CoderHouse'],
        certificateLink: '/images/crtificadoDesarrolloweb.jpg'
      },
      {
        imgSrc: '/images/JSYJQ.jpg',
        title: 'JavaScript & jQuery',
        tags: ['Udemy'],
        certificateLink: '/images/JSYJQ.jpg'
      },
      {
        imgSrc: '/images/ReactJSyRedux.jpg',
        title: 'ReactJS + Redux',
        tags: ['Udemy'],
        certificateLink: '/images/ReactJSyRedux.jpg'
      }
]

const Certificates = () => {
    return (
      <section id="certificates" className="section">
          <div className="container">
              <h2 className="headline-2 mb-8 reveal-up">Certificaciones:</h2>
              <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                  {certificates.map(({ imgSrc, title, tags, certificateLink}, key) => (
                      <CertificatesCard key={key} imgSrc={imgSrc} title={title} tags={tags} certificateLink={certificateLink} className="reveal-up" />
                  ))}
              </div>
          </div>
      </section>
    )
  }
  
  export default Certificates