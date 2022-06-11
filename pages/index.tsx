import Head from "next/head";
import styles from "../styles/homepage.module.css";
import Meta from "../components/meta";
import Link from "next/link";
import MetaPage from "../components/MetaPage";

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
        <MetaPage title="R T T N B R G R | 🤢🍔" titleSuffix={false} />

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
              <p className={styles["text--body"]}>👋 Hi.</p>
              <p className={styles["text--body"]}>
                My name is Nathan Mateo Rothenberger.
              </p>
              <p className={styles["text--body"]}>
                I’m a designer & developer who likes making stuff for the web.
                Currently, I’m helping build the Camp design system at Active
                Campaign.
              </p>
              <p className={styles["text--body"]}>
                I’m also working on a few things that aren’t ready to share just
                yet. You can check out the other stuff I’ve made below or say
                whatsup on any of the socials.
              </p>
              <p className={styles["text--body"]}>Take care ✌️</p>
            </div>
            <ul className={styles.list}>
              <h1 className={styles["text--header"]}>Links</h1>
              <li className={styles["list-item"]}>
                <a className={styles.link} href="https://www.rottenburger.com/">
                  Portfolio
                </a>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/blog">
                  <a className={styles.link}>Blog</a>
                </Link>
              </li>
              <li className={styles["list-item"]}>
                <Link href="/reviews">
                  <a className={styles.link}>Reviews</a>
                </Link>
              </li>
              <li className={styles["list-item"]}>
                <a className={styles.link} href="https://github.com/rttnbrgr">
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
