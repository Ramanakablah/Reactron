import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = ({color}) => {

  const Navoptions={"Focusathon":{icon:<i className="fa-solid fa-person-running"></i>,link:"/timeto/focusathon"},
  "Focus Relay":{icon:<i className="fa-solid fa-clock-rotate-left"></i>,link:"/timeto/pomodora"},
  "Home":{icon:<i className="fa-solid fa-house"></i>,link:"/"},
  "Zen Mode":{icon:<i className="fa-solid fa-street-view"></i>,link:"/timeto/zen"},
  "Time Race":{icon:<i className="fa-regular fa-clock"></i>,link:"/timeto/attentioncalmly"}}

  const style = {
    backgroundColor:`${color}d9`,
  }

  return (
    <div className={styles.navbar} style={{ background: style.backgroundColor }}>
      <div className={styles.navbar_items_wrapper}>
        {
         Object.keys(Navoptions).map((elem, ind) => {
            return <div className={styles.nav_item}>
              <div className={styles.nav_item_content}>
              <Link to={Navoptions[elem].link}> <div className={styles.image_wrapper} style={{background:`${color}`}}>
                   {Navoptions[elem].icon} 
                </div></Link>
                <div className={styles.nav_item_title}>{elem} </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Navbar