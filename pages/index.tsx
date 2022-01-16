import Head from "next/head";
import styles from "../styles/homepage.module.css";
import Meta from "../components/meta";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutFork = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen flex justify-center items-center">
        <main>{children}</main>
      </div>
    </>
  );
};

type Props = {};

const Index = ({}: Props) => {
  return (
    <>
      <LayoutFork>
        <Head>
          {/* do I need these? */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>R T T N B R G R | 🤢🍔</title>
        </Head>

        <div className={styles.root}>
          <div>
            <div className={styles.group}>
              <img
                src="assets/homepage/avi-1024.jpg"
                alt="Nathan Rothenberger headshot"
                className={styles.profile}
              />
              <h1 className={styles["text--header"]}>@rttnbrgr</h1>
            </div>

            <div className={styles.group}>
              <p className={styles["text--body"]}>
                Hi. My name is Nathan Mateo Rothenberger. I am a designer and
                developer who has been building things on the internet for over
                a decade. Most recently, I worked at Sprinklr as a Design System
                Engineer and UX Designer. I helped build out our design system
                including the UI Kit, documentation, and design ops for a team
                of 30+ designers.
              </p>
              <p className={styles["text--body"]}>
                I love pulling designs apart and understanding how all of the
                pieces fit together. I care deeply about the intersection of
                design and engineering and how those two worlds collaborate to
                build better products.
              </p>
              <p className={styles["text--body"]}>
                I am currently looking for a new opportunity in either the
                Dallas or Portland area as well as a new hour long drama to dive
                into. If you have leads on either please reach out.
              </p>
            </div>
            <ul className={styles.list}>
              <h1 className={styles["text--header"]}>Links</h1>
              <li className={styles["list-item"]}>
                <a className={styles.link} href="http://www.rottenburger.com/">
                  Portfolio
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a className={styles.link} href="https://review.rttnbrgr.com/">
                  Reviews
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a className={styles.link} href="http://github.com/rttnbrgr">
                  Github
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a
                  className={styles.link}
                  href="https://www.linkedin.com/in/nathan-rothenberger-11765b16/"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </LayoutFork>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
