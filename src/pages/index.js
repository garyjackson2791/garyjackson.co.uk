import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { getImage, StaticImage } from "gatsby-plugin-image"

import BackgroundImage from 'gatsby-background-image'

import Lottie from "lottie-react"

import lottieImage from "../animations/91382-web-development.json"
import lottieImageComingSoon from "../animations/104195-coming-soon-dark-background.json"


import * as global from '../styles/global.module.scss'
import * as homepage from '../styles/homepage.module.scss'

const Home = ({ data, location }) => {
  const contactAnimation = JSON.parse(JSON.stringify(lottieImage))
  const comingSoonAnimation = JSON.parse(JSON.stringify(lottieImageComingSoon))
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <section className={homepage.masthead} id="masthead">
        <div className={["md:grid-cols-2 mx-auto", homepage.wrap].join(" ")}>
          <div className="px-3">
            <div className={homepage.content}>
              <h1 className={homepage.pageTitle} data-sal="fade" data-sal-duration="600" data-sal-delay="300" data-sal-easing="ease">Web Developer based in Liverpool</h1>
              <p class={homepage.mastheadSummary} data-sal="fade" data-sal-duration="600" data-sal-delay="600" data-sal-easing="ease">Highly experienced in building bespoke custom websites using WordPress.</p>
              <a href="#work" className={[global.btn, global.btnPrimary].join(" ")} data-sal="fade" data-sal-duration="600" data-sal-delay="900" data-sal-easing="ease">See some of my work</a>
            </div>
          </div>
          <div className="px-3">
            <div className="flex items-center justify-center px-3" data-sal="slide-right" data-sal-duration="600" data-sal-delay="1200" data-sal-easing="ease">
              <Lottie animationData={contactAnimation} style={{ width: "300px" }} />
            </div>
          </div>
        </div>
      </section>

      <section className={homepage.about} id="about">
        <div className={homepage.wrap}>
          <span className={homepage.headingMeta} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">About</span>
          <h2 className={homepage.heading} data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Who am I?</h2>
          <div data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
            <p>Hi, I'm Gary Jackson, a full-stack web developer from Liverpool. 
              My interest in Web Development began in 2016 after watching the TV show <a href="https://www.hbo.com/silicon-valley" target="_blank"><i>Silicon Valley</i></a> and wanting to build my own start-up.
            </p>
            <p>This led to me going to University and studying for a BSc (Hons) degree in Computing and IT alongside teaching myself Web Development. 
            </p>
          </div>
        </div>
      </section>



      <section className={homepage.experience} id="experience">
        <div className={homepage.wrap}>
          <span className={homepage.headingMeta} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Experience</span>
          <h2 className={homepage.heading} data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Work Experience</h2>
          <div className={homepage.timeline}>
            <article className={homepage.timelineEntry} data-sal="slide-right" data-sal-duration="800" data-sal-delay="400" data-sal-easing="ease">
              <div className={homepage.timelineEntryInner}>
                <div className={homepage.timelineIcon}>

                </div>
                <div className={homepage.timelineLabel}>
                  <h2>We Are Web - Web Developer<span>January 2021 - present</span></h2>
                  <p>Responsible for building bespoke websites utilising a WordPress CMS making use of plugins such as Advanced Custom Fields, Gravity Forms and WooCommerce.</p>
                  <p>Involved in the entire development process from initial scoping, to wireframes and all the way through to testing and deployment.</p>
                  <p>Heavily focussed on Digital Marketing and SEO best practices to help client websites to rank well.</p>
                </div>
              </div>
            </article>

            <article className={homepage.timelineEntry} data-sal="slide-right" data-sal-duration="800" data-sal-delay="500" data-sal-easing="ease">
              <div className={homepage.timelineEntryInner}>
                <div className={homepage.timelineIcon}>

                </div>
                <div className={homepage.timelineLabel}>
                  <h2>Halewood International - Web Developer<span>June 2020 - January 2021</span></h2>
                  <p>Developed, updated, and maintained Shopify and WordPress based sites for a number of large brands such as The Drop Store, Whitley Neill Gin, Crabbie's Ginger Beer, and Dead Man's Fingers Rum.</p>
                  <p>Fixed many DNS and web hosting issues, and migrated a number of external sites in-house.</p>
                  <p>Planned, set up and managed various AWS solutions including S3, CloudFront and IAM for portfolio of websites.</p>
                </div>
              </div>
            </article>

            <article className={homepage.timelineEntry} data-sal="slide-right" data-sal-duration="800" data-sal-delay="600" data-sal-easing="ease">
              <div className={homepage.timelineEntryInner}>
                <div className={homepage.timelineIcon}>

                </div>
                <div className={homepage.timelineLabel}>
                  <h2>Elephant Digital - Junior Web Developer<span>June 2019 - June 2020</span></h2>
                  <p>Responsible for building bespoke websites utilising WordPress to create a clean, easy-to-use CMS with plugins such as Advanced Custom Fields, Gravity Forms, and WooCommerce.</p>
                  <p>Have a keen eye for detail and followed the principle of creating a 'Pixel Perfect' website by transforming designs in Avocode and XD.</p>
                  <p>I built a range of websites for different sectors including consumer, legal and professional services, property & construction and health & fitness.</p>                
                </div>
              </div>
            </article>

            <article className={homepage.timelineEntry}>
              <div className={homepage.timelineEntryInner}>
                <div className={[homepage.timelineIcon, homepage.colourNone].join(" ")}></div>
              </div>
            </article>
            
          </div>
        </div>
      </section>



      <section className={homepage.work} id="work">
        <div className={homepage.wrap}>
          <span className={homepage.headingMeta} data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">Work</span>
          <h2 className={homepage.heading} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">Recent Work</h2>

          <div class="grid grid-cols-2 gap-8">
            <div data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://www.dphlaw.co.uk/" target="_blank">
                DPH Law
              </a>

              <a href="https://www.dphlaw.co.uk/" target="_blank">
                <StaticImage
                  className="max-w-full website-image"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/dphlaw-desktop-2048x1280.png.webp"
                  width={400}
                  height={240}
                  quality={95}
                  alt="DPH Law Website"
                />
              </a>

            </div>



            <div data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://medicash.org/" target="_blank">Medicash</a>

              <a href="https://medicash.org/" target="_blank">
                <StaticImage
                  className="max-w-full website-image"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/medicash-desktop.png"
                  width={400}
                  height={240}
                  quality={95}
                  alt="Medicash Website"
                />
              </a>
            </div>


            <div data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://moixa.com/" target="_blank">Moixa</a>

              <a href="https://moixa.com/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/moixa-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Moixa Website"
                  />
              </a>
            </div>


            <div data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://www.tradestoreonline.co.uk/" target="_blank">Trade Store Online</a>

              <a href="https://www.tradestoreonline.co.uk/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/trade-store-online-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Trade Store Online Website"
                  />
              </a>
            </div>


            <div data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://www.nevisbeck.co.uk/" target="_blank">Nevis Beck</a>

              <a href="https://www.nevisbeck.co.uk/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/nevis-beck-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Nevis Beck Website"
                  />
                </a>
            </div>

            <div data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://poshfrocksandwellies.co.uk/" target="_blank">Posh Frocks & Wellies</a>

              <a href="https://poshfrocksandwellies.co.uk/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/posh-frocks-wellies-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Posh Frocks & Wellies Website"
                  />
                </a>
            </div>

            <div data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://www.vextrix.com/" target="_blank">Vextrix</a>

              <a href="https://www.vextrix.com/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/vextrix-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Vextrix Website"
                  />
                </a>
            </div>


            <div data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
              <a href="https://www.luxurystudenthomes.co.uk/" target="_blank">Luxury Student Homes</a>

              <a href="https://www.luxurystudenthomes.co.uk/" target="_blank">
                <StaticImage
                    className="max-w-full website-image"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/lsh-desktop-2048x1280.png.webp"
                    width={400}
                    height={240}
                    quality={95}
                    alt="Luxury Student Homes Website"
                  />
                </a>
            </div>

            
            
          </div>
        </div>
      </section>







      <section className={homepage.iconsStrip}>
        <div className="container">
          <div className={homepage.introductoryContent}>
            <h3 className={homepage.sectionTitle}>Technologies I Use</h3>
          </div>
          <div className={homepage.icons}>
            <div className={homepage.icon} data-sal="slide-left" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">
              <div className={homepage.iconContainer}>
                <StaticImage
                  className="wordpress"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/wordpress-blue.svg"
                  width={56}
                  height={56}
                  quality={95}
                  alt="WordPress"
                />
              </div>
              <h4>WordPress</h4>
            </div>
            <div className={homepage.icon} data-sal="slide-right" data-sal-duration="1000" data-sal-delay="400" data-sal-easing="ease">
              <div className={homepage.iconContainer}>
                <StaticImage
                  className="woocommerce"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/woocommerce.svg"
                  width={95}
                  height={56}
                  quality={95}
                  alt="WooCommerce"
                />
              </div>
              <h4>WooCommerce</h4>
            </div>
            <div className={homepage.icon} data-sal="slide-left" data-sal-delay="900" data-sal-easing="ease">
              <div className={homepage.iconContainer}>
                <StaticImage
                  className="gatsby"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/gatsby-logo.svg"
                  width={56}
                  height={56}
                  quality={95}
                  alt="Gatsby"
                />
              </div>
              <h4>Gatsby</h4>
            </div>
            <div className={homepage.icon} data-sal="slide-left" data-sal-delay="1200" data-sal-easing="ease">
              <div className={homepage.iconContainer}>
                <StaticImage
                  className="webflow"
                  layout="fixed"
                  formats={["auto", "webp", "avif"]}
                  src="../images/webflow-ar21.svg"
                  width={95}
                  height={56}
                  quality={95}
                  alt="Webflow"
                />
              </div>
              <h4>Webflow</h4>
            </div>
          </div>
        </div>
      </section>



      <section className={homepage.blog} id="blog">
        <div className={homepage.wrap}>
          <span className={homepage.headingMeta} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Read</span>
          <h2 className={homepage.heading} data-sal="slide-left" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Recent Blog</h2>

          <div>
            <Lottie animationData={comingSoonAnimation} style={{ width: "200px" }} />
          </div>
        </div>
      </section>




      <section className={homepage.contact} id="contact">
        <div className={homepage.wrap}>
          <span className={homepage.headingMeta} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">Contact</span>
          <h2 className={homepage.heading} data-sal="slide-down" data-sal-duration="600" data-sal-delay="500" data-sal-easing="ease">Get in touch</h2>
          <div className={["grid md:grid-cols-2"].join(" ")}>
            <div className={["md:mb-0 mb-24"].join(" ")}>
              <div className="flex items-center md:w-1/2 px-3">
                <div className={homepage.contactIcon} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
                  <StaticImage
                    className="email"
                    layout="fixed"
                    formats={["auto", "webp", "avif"]}
                    src="../images/email.svg"
                    width={30}
                    height={30}
                    quality={95}
                    alt="email"
                  />
                </div>
                <a href="mailto:hello@garyjackson.co.uk" className={homepage.emailLink} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">hello@garyjackson.co.uk</a>
              </div>
            </div>
            <div>
              <div className="flex items-center px-3">
                <form method="post" action="https://getform.io/f/406fecd9-20fa-4d29-876a-5185d2bc1f48">
                  <div className={homepage.formGroup} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                  </div>

                  <div className={homepage.formGroup} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                  </div>

                  <div className={homepage.formGroup} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
                    <textarea name="message" id="message" rows="5" placeholder="Message" required/>
                  </div>

                  <div class="g-recaptcha" data-sitekey="6LeHYaQgAAAAAHQIVmLHsij3f-YGfv-Kp_8qIDfL" /> 

                  <div className={homepage.formGroup} data-sal="slide-right" data-sal-duration="600" data-sal-delay="400" data-sal-easing="ease">
                    <button type="submit" className={[global.btn, global.btnPrimary].join(" ")}>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`