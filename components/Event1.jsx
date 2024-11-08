'use client'

import Link from 'next/link'

import { useState, useEffect } from 'react';
import styles from "@/components/css/HomeSection1.module.css";

export default function Home1() 
{
    const [decompte, setDecompte] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => 
    {
        // Fonction pour calculer le décompte de temps
        const calculDecompte = () => {
            const dateCible = new Date('2024-09-10T01:00:00');
            const dateDujour = new Date();
            const difference = dateCible - dateDujour;

            // Calcul des jours, heures, minutes et secondes restantes
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Mettre à jour le state avec le nouveau décompte de temps
            setDecompte({ days, hours, minutes, seconds });
        };
        calculDecompte();
        const interval = setInterval(calculDecompte, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <section className={styles.homeSection1}>
            <div className={styles.divPrincipale}>
                <span className={styles.date}>10 - 25 Septembre 2024 | Ottawa(ontario), Canada</span>
                <h1 className={styles.titrePrincipale}>cars sanctuary 2024</h1>
                <div className={styles.decompte}>
                    <span className={styles.jours}><p>Days</p>{decompte.days} </span>
                    <span className={styles.heures}><p>Hours</p>{decompte.hours} </span>
                    <span className={styles.minutes}><p>Minutes</p>{decompte.minutes} </span>
                    <span className={styles.secondes}><p>secondes</p>{decompte.seconds}</span>
                </div>
                <div className={styles.menubutton}>
                    <Link href="/page-Events/Event-2" className={styles.homeButton}>Next Event</Link>
                </div>
            </div>
        </section>
    );
}
