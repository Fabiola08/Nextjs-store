import Link from 'next/link'
import styles from './Header.module.sass'

export const Header = () => {

    //console.log( 'Hola mundo Header' )
    return( <header className={styles.Header}>
        <nav>
          <ul className={styles.Header__list}>

           <li>
              <Link href="/">

                Home
          
              </Link>
            </li>
            <li>
              <Link href="/store">

                Store

              </Link>
            </li>
            {/* <li>
              <Link href="/test">

                Test

              </Link>
            </li> */}
            
          </ul>
        </nav>
      </header>)
}