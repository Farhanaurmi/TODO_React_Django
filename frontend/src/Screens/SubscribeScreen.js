import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Package from '../Components/Package'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listPackageDetails, createPackage } from '../actions/packageActions'
import { PACKAGE_CREATE_RESET } from '../constants/packageConstants'

function SubscribeScreen({ history }) {

    const dispatch = useDispatch()

    const packageDetails = useSelector( state => state.packageDetails )
    const { error, loading, packages } = packageDetails

    const packageDelete = useSelector(state => state.packageDelete)
    const {loading:loadingDelete, error:errorDelete, success:successDelete} = packageDelete

    const packageCreate = useSelector(state => state.packageCreate)
    const {loading:loadingCreate, error:errorCreate, success:successCreate, pkg:createdPackage} = packageCreate

    const userLogin= useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    useEffect(() => {
        dispatch({ type: PACKAGE_CREATE_RESET })
        if(!userInfo){
            history.push('/login')
        }

        if(successCreate){
            history.push(`/package/${createdPackage.id}/edit`)
        }else{
            dispatch(listPackageDetails())
        }
        
    }, [dispatch, history, userInfo, successDelete, successCreate, createdPackage])


    const createPackageHandler = () => {
        dispatch(createPackage())
    }

    
    
    return (
        <div>
            <h1>All Packages</h1>
            { loading && <Loader/> }
            { error && (<Message variant='secondary'>{error}</Message>)}
            { userInfo.isAdmin? 

            (
            <Row>
                <Button className='my-3' onClick={createPackageHandler}>
                        <i className='fas fa-plus'></i> Create Package
                    </Button>
                { packages.map(p =>(
                    <Col key = {p._id} sm={12} md={6} lg={4} xl={3}>
                        <Package p={p}/>
                    </Col>
                ))}
            </Row>)
            :(<Row>
                {packages.map(p =>(
                <Col key = {p.id} sm={12} md={6} lg={4} xl={3}>
                    <Package p={p}/>
                </Col>
            ))}
        </Row>)
        }
            
        </div>
    )
}

export default SubscribeScreen
