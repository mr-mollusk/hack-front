import { PropsWithChildren } from 'react'
import { Header } from '../header'
import { Sidebar } from '../sidebar'
import s from './layout.module.scss'
export const Layout = ({children}:PropsWithChildren) => {
   return <div className={s.wrapper}>
        <div className={s.header}>
            <Header />
        </div>
        <div className={s.sidebar}>
            <Sidebar />
        </div>
        <div className={s.content}>
            {children}
        </div>
    </div>
}