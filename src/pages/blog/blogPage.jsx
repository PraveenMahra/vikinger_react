import "./blogPage.css";

function BlogPage() {
  return (
    <>
      <header>
        <div className="logo-img">
          <a href="index.html">
            {" "}
            <img src="img/logo.png" alt="logoimg" />
          </a>
        </div>
        <i className="fa-solid fa-bars"></i>
        <div className="searchbar">
          <input type="text" placeholder="Enter your search here..." />
        </div>
        <div className="shopcart-vertical-line"></div>
        <div className="shopping-cart">
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="shopcart-vertical-line"></div>
        <a href="/login.html">
          <button className="btn">Login</button>
        </a>
      </header>
      <div className="content-box">
        <div className="baneer-sec container">
          <div className="banner-sec-img">
            <img className="blog-img" src="blogimg/blog-icon.png" alt="" />
            <img className="banner-bg" src="blogimg/banner-bg.png" alt="" />
            <div className="banner-sec-text">
              <h2>Blog Posts</h2>
              <p>Read about news, announcements and more!</p>
            </div>
          </div>
        </div>

        <section className="sec-preview container">
          <div className="preview-img">
            <img src="blog img/preview.jpg" alt="image" />
          </div>
          <div className="preview-text">
            <i className="fa-regular fa-bookmark icon-bookmark"></i>
            <div>
              <a href="#">
                GAMING <span> May 29, 2023</span>
              </a>

              <h2 className="preview-text-heading heading">
                [Exclusive!] Check out all the new missions and story of the
                Fire Witch DLC!
              </h2>
              <p className="preview-text-para">
                Downloadable content (DLC) is additional content created for an
                already released video game, distributed through the Internet by
                the game’s publisher. It can either be added for no extra cost
                or it can be a form of video game monetization, enabling the
                publisher to gain additional revenue fro…
              </p>
              <h4 className="heading">Read more...</h4>
            </div>
          </div>
          <div className="sec-preview-comment">
            <a href="#">0 Comments</a>
            <p>0 Shares</p>
          </div>
        </section>

        <section className="section-post container">
          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog8.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                GAMING <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                Here’s the X-mas Gamer Box from Powerstation and it packs some
                surpirses
              </h2>
              <p className="sec-post-para">
                A video game console is an electronic or computer device that
                outputs a video signal or visual image to display a video game
                that one or more people can play through some type of game
                controller. These may be home consol...
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog11.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                COSPLAY <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                Take a look at all the best cosplays of the 2020 Anime
                Convention in Tokyo,...
              </h2>
              <p className="sec-post-para">
                Cosplay (コスプレ, kosupure), a portmanteau of the words costume
                play, is a performance art in which participants called
                cosplayers wear costumes and fashion accessories to represent a
                specific character. Cosplayers often in...
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog6.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                GAMING <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                I spoke with the developers of RoBot SaMurai II at the 2020
                GamingCon
              </h2>
              <p className="sec-post-para">
                Video game culture is a worldwide new media subculture formed by
                video games. As video games have exponentially increased in
                popularity over time, they have had a significant influence on
                popular culture. Video game cult...
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog9.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                STORIES <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                Here’s the how and why did I became a full time Gaming Streamer
              </h2>
              <p className="sec-post-para">
                An online streamer, also known as a live streamer, internet
                streamer, or streamer, is a person who broadcasts themself
                online through a live stream or pre-recorded video. The scope of
                online streamers has grown to includ...
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog5.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                GAMING <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                Check out the new mansion we got for our eSports team!
              </h2>
              <p className="sec-post-para">
                This content is for members only. <a href="#"> Join Now</a>
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="sec-post-image">
              <img src="blogimg/blog10.jpg" alt="" />
            </div>
            <div className="sec-post-text">
              <a href="#">
                GAMING <span> May 29, 2023</span>
              </a>

              <h2 className="sec-post-heading heading">
                I will be at this month’s GamingCon with NekoBebop
              </h2>
              <p className="sec-post-para">
                A gamer (sometimes also called player or electronic athlete and
                eathlete) is a person who plays interactive games, especially
                video games, tabletop role-playing games, and skill-based card
                games, and who plays for usuall...
              </p>
              <h4 className="heading">Read more...</h4>
              <div className="sec-post-comment">
                <a href="#">2 Comments</a>
                <p>0 Shares</p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-top">
            <div className="footer-logo">
              <div>
                <img src="img/logo (1).png" alt="logo-img" />
              </div>
              <div>
                <h2 className="footer-logo-name">VIKINGER</h2>
                <h4 className="footer-logo-detail heading">
                  BUDDYPRESS SOCIAL COMMUNITY
                </h4>
              </div>
            </div>
            <div className="footer-paragraph">
              <p>
                Vikinger Social Community was created in 2020, designed to be a
                new and exciting way to bring people together!
              </p>
            </div>
            <div className="footer-social-link">
              <a href="#">
                {" "}
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom container">
            <p className="footer-bottom-text">
              © 2020, Vikinger Theme by <a href="#"> Odin_Design</a>
            </p>
            <p className="footer-bottom-text">BuddyPress + GamiPress</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default BlogPage;
