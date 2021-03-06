import React, { Component } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import parameters from "../../particleConfig";
import { Footer, Header } from "../../Components";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  filler = "";
  particles = undefined;

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    if (this.state.width >= 1100) {
      this.filler = <br />;
      this.particles = (
        <Particles className={styles.particles} params={parameters} />
      );
    } else if (this.state.width < 1100) {
      this.filler = "";
    }
    return (
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <img className={styles.hand} src="Wireframe Hand.png" alt="" />
          <div className={styles.grad}>
            {this.particles}
            <div className={styles.container}>
              <a
                href="https://soundcloud.com/suffocationpit"
                className={styles.blueBox}
              >
                mus{this.filler}ic
              </a>
              <Link to="visuals" className={styles.redBox}>
                visu{this.filler}als
              </Link>
              <a
                href="https://teespring.com/stores/the-suffocation-pit"
                className={styles.greenBox}
              >
                sh{this.filler}op
              </a>
              <Link to="about" className={styles.purpleBox}>
                about/{this.filler}contact
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
