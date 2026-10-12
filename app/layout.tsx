import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'Parcerias · Prazeres Interrompidos',description:'A rede internacional de parcerias de Prazeres Interrompidos.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-PT"><body>{children}</body></html>}