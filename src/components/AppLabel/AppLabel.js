import React from "react";
import styles from "./AppLabel.module.css";

class AppLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles["label"]}>
        <div className={styles["label-header"]}>
          <h2>Createur de CV</h2>
          <div>
            <button
              className={styles["save"]}
              type="button"
              onClick={this.props.printDocument}
            >
              <img
                src={require("../../icons/save.png")}
                className={styles["download"]}
                alt="Download"
              ></img>
              <span className={styles["buttonText"]}>Telecharger</span>
            </button>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default AppLabel;
