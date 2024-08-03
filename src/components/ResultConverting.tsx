import styles from "./resultConverting.module.css";





type ResultState = 'simpleResult' | "timedResult"


interface MyComponentProps{
  result : ResultState;
}



export default function ResultConverting(props : MyComponentProps) {


  return (
    <>




      <div className={styles.resultCard}>
    





  


    




      </div>
    </>
  );
}
