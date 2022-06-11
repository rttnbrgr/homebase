import styles from "../styles/homepage.module.css";
import Link from "next/link";
import MetaPage from "../components/MetaPage";
import { LayoutChakra } from "../components/layouts";
import { AvatarHome } from "../components/AvatarHome";
import { Box } from "@chakra-ui/react";

const rootStyles = {};

const rootSx = {
  "--black": "#0f1014",
  "--white": "#fff",
  fontSize: "1.5rem",
  padding: "1.5em",
  display: "flex",
  alignItems: "center",

  "@media screen and (min-width: 768px)": {
    fontSize: "2.5rem"
  },

  "@media screen and (min-width: 1440px)": {
    fontSize: "3.25rem"
  }
};

type Props = {};

const Index = ({}: Props) => {
  return (
    <LayoutChakra>
      <MetaPage title="R T T N B R G R | 🤢🍔" titleSuffix={false} />
      <Box sx={rootSx} className="rootBox">
        <div>
          <div className={styles.group}>
            <AvatarHome />
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
              <Link href="/fullstack-design">
                <a className={styles.link}>Fullstack</a>
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
      </Box>
    </LayoutChakra>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
