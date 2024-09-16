import React, { useContext } from 'react';
import './sidebar.css';
import { useState } from 'react';
import { Context} from '../../context/Context';

const Sidebar = () => {
  const [extended,setExtended]=useState(false)
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)
  const loadPrompt= async (prompt)=> {
    setRecentPrompt(prompt)
    await onSent(prompt)
   }

  return (
    <div className="sidebar">
      <div className="top">
        <img  onClick={()=>setExtended(prev=>!prev)} className="menu" src="/assets/menu_icon.png" alt="" />
        <div onClick = {()=>newChat()} className="newChat">
          <img src="/assets/plus_icon.png" alt="" />
          {extended?<p>New chat</p>:null}
        </div>
        {extended?
        <div className='recent'>
          <p className='recentTitle'>Recent</p>
          {prevPrompts.map((item,index)=>{
            return (
              <div onClick ={()=>loadPrompt(item)} className='recentEntry'>
            <img src='/assets/message_icon.png' alt=''/>
            <p>{item.slice(0,18)} ...</p>
          </div>
            )
          }) }
        </div>:null}
      </div>
      
      <div className="bottom">
        <div className='bottomItem recentEntry'>
        <img src="/assets/question_icon.png" alt="" />
        {extended?<p>Help</p>:null}
        </div>
        <div className='bottomItem recentEntry'>
        <img src="/assets/history_icon.png" alt="" />
        {extended?<p>Activity</p>:null}
        </div>
        <div className='bottomItem recentEntry'>
        <img src="/assets/setting_icon.png" alt="" />
        {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;