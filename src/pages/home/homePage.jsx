import Button from "../../components/button/button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import FAQSection from "./faqQuestion";
import "./homePage.css";

function HomePage() {
  return (
    <div>
      <main>
        <section className="sec-introduction">
          <Header />

          <section className="sec-introduction-details">
            <p className="intro-welcome">WELCOME TO THE</p>
            <h1 className="intro-heading">
              VIKINGER <br />
              COMMUNITY!
            </h1>
            <p className="paragraph intro-para">
              <strong>
                The next generation WordPress+Buddypress social community!
              </strong>
              Connect with your friends with full profiles, reactions, groups,
              badges, quests, ranks, credits and
              <strong> much more to come!</strong>
            </p>

            <div className="profile-btn">
              <Button className="purple-btn" value="Why vikinger?" />
              <Button className="purple-outline-btn" value="Our Profile" />
            </div>
          </section>
        </section>

        <div className="content-box">
          <section className="community-section">
            <div className="container-first">
              <div className="grid">
                <div>
                  <p className="paragraph">VIKINGER COMMUNITY</p>
                  <h2 className="heading community-heading">
                    The Best Way to Connect With Your Friends!
                  </h2>
                </div>
                <div>
                  <p className="paragraph community-para">
                    We made sure that the theme has everything you need to build
                    an incredible community, and we also have ucoming features
                    updates, so keep an eye out!.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-community-section container-second">
              <div className="community-sec-img">
                <img src="img/01.png" alt="community photo" />
                <h2 className="heading community-sec-heading">
                  BuddyPress Powered
                </h2>
                <p className="paragraph community-sec-para">
                  We took advantage and expanded the Buddypress plugin with
                  reactions, shares, media, and much more!
                </p>
              </div>
              <div className="community-sec-img">
                <img src="img/02.png" alt="community photo" />
                <h2 className="heading community-sec-heading">
                  Super Gamification!
                </h2>
                <p className="paragraph community-sec-para">
                  We created a full gamification experience with badges, quests,
                  credits and ranks to create an awesome experience!
                </p>
              </div>
              <div className="community-sec-img">
                <img src="img/03.png" alt="community photo" />
                <h2 className="heading community-sec-heading">
                  Incredible Design
                </h2>
                <p className="paragraph community-sec-para">
                  All pages are carefully crafted to fit all you may need! Also,
                  we included lots of illustrations and elements PSD’s!
                </p>
              </div>
            </div>
          </section>

          <section className="showcase container-first">
            <img src="img/S01.png" alt="showcaseimg" />
          </section>

          <section className="sec-features container-first">
            <div className="feature-grid">
              <div>
                <p className="paragraph">MAIN FEATURES</p>
                <h2 className="heading feature-sec-heading">
                  Incredible Community Pages and Features!
                </h2>
                <p className="paragraph feature-sec-para">
                  Powered by BuddyPress, the theme has super complete profile
                  pages with a sleek design, info boxes to show things like your
                  gamification earnings or friends, and a slider for easier
                  access. You’ll also find other community pages, like newsfeed,
                  members and groups directory and more!. <br />
                  <br />
                  You can also create public and private groups in order to find
                  people that share your same interests! We also created an
                  account hub so you can easily manage lots of stuff, like
                  groups creation, groups management, avatar and cover upload,
                  main profile info, email settings and much more!
                </p>
              </div>
              <img className="feature-img" src="img/F01.png" alt="" />
            </div>
            <div className="feature-grid">
              <img className="feature-img" src="img/F02.png" alt="" />
              <div>
                <p className="paragraph">MAIN FEATURES</p>
                <h2 className="heading feature-sec-heading">
                  Have Fun With the Gamification System!
                </h2>
                <p className="paragraph feature-sec-para">
                  Using
                  <strong>
                    GamiPress Achievements, Credits, and Ranks features,
                  </strong>
                  we built a super complete gamification system that has badges,
                  quests, ranks and credits. To link all to the overall design,
                  we created widgets for the profiles, credits counters for the
                  top menu and progress bars for the avatars, among other
                  things!.
                  <br />
                  <br />
                  Inside the Illustrations folder, you’ll find PSD files with
                  lots of badge, quests, ranks and credits designs so you can
                  have fun choosing the ones you like the most! Also, they are
                  all made with PS Vectors so it’s easier to customize or even
                  create new ones!
                </p>
              </div>
            </div>
            <div className="feature-grid">
              <div>
                <p className="paragraph">MAIN FEATURES</p>
                <h2 className="heading feature-sec-heading">
                  Connect with People In the Forums!
                </h2>
                <p className="paragraph feature-sec-para">
                  The theme has a <strong> bbPress forum integration </strong>so
                  you can easily create awesome forums with images, subforums
                  and topics to share interests with the community! <br />
                  <br />
                  We styled it to make it look like the original design (all
                  icons are included in the pack!) and also added some new
                  stuff, like the tags, voices and user widgets at the side of
                  the topic replies. This integration also has complete user’s
                  profile forum stats and groups integration so you can link
                  forums to your group!
                </p>
              </div>
              <img className="feature-img" src="img/F03.png" alt="" />
            </div>

            <div className="feature-grid">
              <img className="feature-img" src="img/F04.png" alt="" />
              <div>
                <p className="paragraph">MAIN FEATURES</p>
                <h2 className="heading feature-sec-heading">
                  Incredible Front-End Account Hub!
                </h2>
                <p className="paragraph feature-sec-para">
                  Once users are logged in. when they click the little cogwheel
                  at the top right corner, they will be able to access all the
                  author hub sections! In here they will be able to
                  <strong>
                    change profile and account info, like avatar and cover,
                    email settings, password, social networks and much more!!
                  </strong>
                  <br />
                  <br />
                  You’ll also find a<strong> groups dedicated section </strong>
                  where you’ll be able to manage and create groups, check and
                  promote members (to for example, mods and admins) send
                  invitations and manage the private groups requests!
                </p>
              </div>
            </div>
          </section>

          <section className="sec-community-details container-first">
            <div className="community-details">
              <p className="paragraph top-head-community-details">
                VIKINGER COMMUNITY
              </p>
              <h2 className="heading community-detail-heading">
                Why Vikinger?
              </h2>
              <p className="paragraph community-detail-para">
                Read here about all the cool features and sections that
                community includes! Super complete profiles, incredible
                gamification system, friendly forums and much more social stuff!
              </p>
            </div>

            <div className="sec-community-details-grid container-first">
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-circle-user sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Awesome Community
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  An incredible community with super full profiles, social
                  links, gamification items and much more!
                </p>
              </div>
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-gem sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Gamification System
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  An incredible gamification system with badges, quests, ranks
                  and credits to earn and unlock!
                </p>
              </div>
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-message sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Friendly Forums
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  Easy to navigate and post forums! Create your own discussion
                  to talk with other people!
                </p>
              </div>
            </div>
            <div className="sec-community-details-grid container-first">
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-sun sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Super Author Hub
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  A complete author hub with profile settings, info, email
                  preferences, group management and more!
                </p>
              </div>
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-moon sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Dark/Light Presets
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  You have a switch to change between light and dark versions
                  that the admin can customize!
                </p>
              </div>
              <div className="sec-community-detail-grid-part">
                <i className="fa-regular fa-eye-slash sec-community-icon"></i>
                <h2 className="heading sec-community-detail-grid-heading">
                  Private Groups
                </h2>
                <p className="paragraph sec-community-detail-grid-para">
                  You can easily create private groups from your author hub!
                  Just go to the manage groups section!
                </p>
              </div>
            </div>
          </section>

          <FAQSection />

          <section className="preview container-first">
            <div className="preview-header">
              <p className="paragraph">VIKINGER COMMUNITY</p>
              <h2 className="heading sec-preview-heading">Watch a Preview</h2>
              <p className="paragraph sec-preview-para">
                In this video you’ll be able to see all what Vikinger has to
                offer! Be sure to see the full playlist in order to see all
                backend elements an video guides of how you’ll be able to
                customize it!
              </p>
            </div>
            <iframe
              className="video-sec"
              width="1120"
              height="630"
              src="https://www.youtube.com/embed/SXEgduXEupk"
              title="Demo Import - Demo Install and Content - Vikinger - WordPress &amp; BuddyPress Social Community"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
