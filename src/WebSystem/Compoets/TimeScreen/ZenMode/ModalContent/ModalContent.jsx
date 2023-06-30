import React, { useState } from 'react'
import style from "./ModalContent.module.css"
import Button from '../../../../Widgets/Button/Button.jsx'

const ModalContent = ({Closeit,InitialSetting,Save}) => {
    const [Datalist,setDatalist] = useState(["🙂","😜","😎","🧘‍♀️","🏛️","👼"])
    const [Settings, setSettings] = useState(InitialSetting)
    return (
    <div className={style.ModalContent}>
        <h1>Settings</h1>
        <div className={style.SettingOptions}>
            <label htmlFor="">Time Span</label>
            <div className={style.Option_List}>
                {Datalist.map((elem,ind)=>{
                    return <div key={elem} className={style.Option} onClick={()=>{
                        setSettings({...Settings,Timespan:(ind+1)*5})
                    }}>
                        <div>{elem}</div> 
                        <span>{(ind+1)*5}</span>
                    </div>
                })
                }
            </div>
        </div>
        <div className={style.ModalButtons}>
            <Button category={"Baby"} text={"Save"} Operation={()=>{
                Save(Settings)
                Closeit()
                }}/>
        </div>
    </div>
  )
}

export default ModalContent