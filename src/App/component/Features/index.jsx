import {features} from './featuresdata'
import styles from './styles.module.css'

export const Features = () => {
   
    // const funct = (features) => {
    //     return(
           
                
    //          <div>
    //             <img src={features.image} />
    //             <h5>{features.title}</h5>
    //             <p>{features.description}</p>
    //         </div>
            
    //     )

    // }
    
    return (
        <section className={styles.features}>
            <h1 className={styles.title}>The power of Premium</h1>
           <div className={styles.card}>
                {features.map((features) => (
                    <div className={styles.carditem}>
                      <img src={features.image} alt="feature" />
                      <div>
                        <h5 className={styles.head}>{features.title}</h5>
                        <p className={styles.description}>{features.description}</p>
                      </div>
                     
                  </div>

                ))}
           </div>
            
        </section>
    )
    
}