import Image from "next/image";
import styles from "../page.module.scss";
import {useTranslations} from 'next-intl';
import Layout from "./layout";
import LayoutInner from "./layoutInner";
export default function Home() {
  const t = useTranslations('Index');
  return (

     <LayoutInner>    <main  >
    <h1>Hi {t('title')}</h1> 
  </main></LayoutInner>
    
 
  );
}
