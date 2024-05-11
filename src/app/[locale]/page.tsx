import Image from "next/image";
import styles from "../page.module.scss";
import {useTranslations} from 'next-intl';
export default function Home() {
  const t = useTranslations('Index');
  return (
    <main  >
      <h1>Hi {t('title')}</h1> 
    </main>
  );
}
