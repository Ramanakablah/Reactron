import React from 'react'
import style from "./Intro3.module.css"

const Intro3 = () => {
  return (
    <div className={style.Intro3}>
      <div className={style.Intro3_Left}>
        <div className={style.Heading}>Focus</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia placeat quaerat ipsa accusantium quam, 
          blanditiis facere officia quis voluptatem aspernatur eius id enim voluptatibus quasi? Fugiat sit iusto nulla nam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi atque, sed molestias ipsum qui placeat repudiandae ut, ducimus enim dolorum accusantium optio laudantium corrupti cumque, facilis cupiditate tempore neque soluta.</p>
      </div>
      <div className={style.Intro3_Right}>
        <img src="https://diythemes.com/wp-content/uploads/edd/2019/11/focus-21-9.png" alt="" />
      </div>
    </div>
  )
}

export default Intro3