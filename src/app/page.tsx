import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@/components";


export default function Home() {
 
  return (
    <main className={styles.homepage}>
      
        
         <div className={styles.evencol}>
            <h1>
              Shop Quality And <span className={styles.title}>Trending</span> Bags
            </h1>
            <div className={styles.largehidden}>
              <Image
              src="/images/heroImg.png"
              width={350}
              height={350}
              alt="Image of a grey handbag"
              />
            </div>
            <p>
              Explore our curated collections of quality and Trending bags
              tailored to your Elegant taste.
            </p>
            <Button text="EXPLORE NOW" type="button" style={styles.btn} />
          </div>

          <Image
            src="/images/heroImg.png"
            width={500}
            height={500}
            alt="Image of a grey handbag"
            className={styles.img}
          />
        
     
    </main>
  );
}
