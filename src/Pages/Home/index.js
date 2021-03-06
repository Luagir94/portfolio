import React from 'react'
import './index.scss'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import {Helmet} from "react-helmet";
const Home = () => {
  return (<>
  <Helmet>
        <title>Luciano Giraudi Developer</title>

        <meta property="og:title" content="Luciano Giraudi - Developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://lucianogiraudi.com/contact"/>
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1520939333485838337/7ED4V9hF_400x400.png"/>
    </Helmet>
    <main className='home'>
      <div className='home__content'>
        <div class="area" >
          <ul class="circles">
            <li>MongoDB</li>
            <li>GIT</li>
            <li>PS</li>
            <li>Scrum</li>
            <li>GCP</li>
            <li>Express</li>
            <li>React JS</li>
            <li>Node</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div >
        <Fade top>
          <div className='home__content-presentation'>
            <h1>Luciano Giraudi</h1>
            <h2>'Front-End Developer', 'Back-End Developer' , 'Data & Analytics'</h2>
            <span
                style={{
                  display: "inline-block",
                }}
              >
            <Typewriter
              options={{
                strings: ['Front-End Developer', 'Back-End Developer', 'Data & Analytics'],
                autoStart: true,
                loop: true,
              }}
            />
</span>
          </div>
        </Fade>
      </div>
      <div className='home__hero'>
        <div class="wrap">
          <div class="comp">
            <div class="monitor">
              <div class="mid">
                <div class="site">
                  <div class="topbar">
                    <div class="cerrar">
                      <div class="circl"></div>
                      <div class="circl"></div>
                      <div class="circl"></div>
                    </div>
                  </div>
                  <div class="inhead">
                    <div class="mid">
                      <div class="item"></div>
                    </div>
                    <div class="mid txr">
                      <div class="item"></div>
                      <div class="item"></div>
                      <div class="item"></div>
                      <div class="item"></div>
                    </div>
                  </div>
                  <div class="inslid">

                  </div>
                  <div class="incont">
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="item"></div>
                    <div class="wid">
                      <div class="itwid">
                        <div>
                          <div class="contfoot"></div>
                        </div>
                      </div>
                      <div class="itwid">
                        <div>
                          <div class="contfoot"></div>
                        </div>
                      </div>
                      <div class="itwid">
                        <div>
                          <div class="contfoot"></div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="infoot">

                    </div>
                  </div>
                </div>
              </div>
              <div class="mid codigo">
                <div class="line">
                  <div class="item var"></div>
                  <div class="item cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line">
                  <div class="item min var"></div>
                  <div class="item min fun"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line">
                  <div class="item var"></div>
                  <div class="item atr"></div>
                  <div class="item cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item min atr"></div>
                  <div class="item lrg fun"></div>
                  <div class="item min fun"></div>
                  <div class="item lrg cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item lrg atr"></div>
                  <div class="item min fun"></div>
                  <div class="item min cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item atr"></div>
                  <div class="item min fun"></div>
                  <div class="item atr"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item min atr"></div>
                  <div class="item min cont"></div>
                  <div class="item lrg atr"></div>
                  <div class="item  fun"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item min atr"></div>
                  <div class="item lrg fun"></div>
                  <div class="item lrg cont"></div>
                  <div class="item min fun"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab2">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab2">
                  <div class="item min atr"></div>
                  <div class="item min fun"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab3">
                  <div class="item min atr"></div>
                  <div class="item min fun"></div>
                  <div class="item lrg fun"></div>
                  <div class="item lrg cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab3">
                  <div class="item min atr"></div>
                  <div class="item min fun"></div>
                  <div class="item lrg atr"></div>
                  <div class="item lrg cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab4">
                  <div class="item min fun"></div>
                  <div class="item lrg atr"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab1">
                  <div class="item atr"></div>
                  <div class="item var"></div>
                  <div class="item cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab3">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line tab4">
                  <div class="item min atr"></div>
                  <div class="item min fun"></div>
                  <div class="item lrg atr"></div>
                  <div class="item lrg cont"></div>
                  <div class="clearfix"></div>
                </div>
                <div class="line">
                  <div class="item min var"></div>
                  <div class="clearfix"></div>
                </div>

              </div>
            </div>
            <div class="base">

            </div>
          </div>
        </div>
      </div>



    </main>
    </>
  )
}

export default Home