import React from 'react'
import style from "./Intro2.module.css"

const Intro2 = () => {
  return (
    <div className={style.Intro2}>
      <div className={style.Intro2_Left}>
        <div className={style.Heading}>Attention</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores quos est inventore aliquam! Ipsa doloremque voluptatibus necessitatibus quisquam, eum numquam illum omnis tempora dicta quae in nam accusamus delectus.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis optio ipsa aperiam doloribus laborum accusantium, quod eum iste accusamus cumque doloremque dolor ex? Eum iure earum ipsam. Maiores, repellendus.</p>
      </div>
      <div className={style.Intro2_Right}>
        <img src="https://marketingweek.imgix.net/content/uploads/2022/09/06131029/Attention-2.jpg" alt="" />
      </div>
    </div>
  )
}

export default Intro2