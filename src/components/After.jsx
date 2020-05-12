import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import firebaseApp from './database/firebaseApp'

function After() {
    const [aid, setAid] = useState('');
    const [pass, setPass] = useState('')
    const [nickname, setNickname] = useState('')
    const firebaseref =firebaseApp.database().ref('signup')
    useEffect(() => {
        firebaseref.once("value", (snapshot)=>{
            const info =snapshot.val()
            setAid(info.id);
            setNickname(info.nickname);
            setPass(info.password);
        });
        return () => {
            
        }
    }, [])
    return (
        <div className='after'>
            {nickname}님 회원가입을 축하드립니다.
            id는 {aid}입니다.
            비밀번호는 {pass}입니다.
            
            
        </div>
    )
}

export default After
