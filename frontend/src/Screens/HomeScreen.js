import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'


function HomeScreen({history}) {

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if (!userInfo){
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <div>
            hello
        </div>
    )
}

export default HomeScreen
