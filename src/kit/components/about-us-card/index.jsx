import React from 'react';
import styles from "./style.module.scss";

const AboutUsCard = (props) => {
  return (
    <div className={styles['about-us-card']}>
      <span className={styles.icon} />
      <h2 className={styles.title.children}> {props.children}
        About us
      </h2>
      <p className={styles.description}> 
      The invention of the written word, sometime around 3200 B.C., launched creative writing with the recording of stories like The Odyssey and tales of Norse gods. Over time, the stories morphed and the skill of storytellers improved as well. Today, over three-fourths of the population can read and write. Oral storytellers have been using elements like voice and personality to entertain and convey human experience. 
      </p>
    </div>
  );
};

export default AboutUsCard;