import app_icon from "@site/static/img/app-icon.png";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const buttons = [
  {
    title: "Get started",
    link: "intro",
  },
  {
    title: "Privacy",
    link: "privacy",
  },
];

function Button({ link, title }) {
  return (
    <div className={clsx("col col--2", styles.feature)}>
      <a className="" href={link}>
        <h3 className="featureTitle">{title}</h3>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <Layout title={`Home`}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src={app_icon} width="200" />
          <h1 style={{ marginTop: 10 }}>Tracky</h1>
        </div>
      </header>
      <main>
        {buttons && buttons.length > 0 && (
          <div className={styles.features}>
            <div className="container">
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {buttons.map((props, idx) => (
                  <Button key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}
