import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from './database/firebaseApp'
import { useEffect } from 'react'



function Signup() {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [nickname, setNickname] = useState('')
    const firedata = firebaseApp.database().ref("signup/")
    const [click, setClick] = useState(false);
    useEffect(() => {
        
        firedata.update({
              id: id,
              password: password,
              nickname : nickname,
          })
          firedata.once('value',(snap)=>console.log(snap.val()))
          setClick(false)
            
        
        return () => {
            
        }
        
    }, [firedata,id,password,nickname,click])
    return (
        <div className='signup'>
            <div className ='id'>
                아이디를 입력해주세요.
                <div className ='emailinput'>
                    <input type="text"
                    onChange={(e)=>{
                        const val=e.target.value
                        setId(val)
                    }}/>
                </div>
            </div>
            <div className ='password'>
                비밀번호를 입력해주세요.
                <div className ='passwordinput'>
                    <input type="password"
                    onChange={(e)=>{
                        const val=e.target.value
                        setPassword(val)
                    }}/>
                </div>
            </div>
            <div className ='nickname'>
                닉네임을 입력해주세요.
                <div className ='nicknameinput'>
                    <input type="text"
                    onChange={(e)=>{
                        const val=e.target.value
                        setNickname(val)
                    }}/>
                </div>
            </div>
            <Link to ='/after'className ='btn' onClick={()=>{
                setClick(!click)
            }}>
                <button >회원가입하기</button>
            </Link>
        </div>
    )
}

export default Signup
