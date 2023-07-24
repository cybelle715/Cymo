import React from "react";
import styles from "./PracticalPreview.module.css";

class PracticalPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles["practical"]}>
        <div className={styles["profile"]}>
          <h3 className={styles["section-h3"]}>PROFIL</h3>
          <p className={styles["bio"]}>{this.props.info[6].value}</p>
        </div>

        <div className={styles["work-section"]}>

        <img
                      src={require("../../icons/work.png")}
                      className={styles["icon"]}
                      fill="currentColor"
                      alt="Work Icon"
                    />
          <h3 className={styles["section-h3"]}>Expérience Professionnelle</h3>

          {this.props.experience[0].company === ""
            ? ""
            : this.props.experience.map((exp, i) => {
                return (
                  <div className={styles["workDiv"]} key={i}>
                    <h4 className={styles["title"]}>{exp.position}</h4>
                    <h5 className={styles["company"]}>
                      {exp.company} | {exp.start} - {exp.end}
                    </h5>
                    <p className={styles["desc"]}>{exp.task}</p>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default PracticalPreview;
