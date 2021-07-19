import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import FormContainer from '../Components/FormContainer'
import { listPackageIdDetails, updatePackage } from '../actions/packageActions'
import { PACKAGE_UPDATE_RESET } from '../constants/packageConstants'


function PackageEditScreen({ match, history }) {
    
    const packageId = match.params.id

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [limit, setLimit] = useState(0)
    
    const dispatch = useDispatch()

    const packageIdDetails = useSelector(state => state.packageIdDetails)
    const { error, loading, pkg } = packageIdDetails

    const packageUpdate = useSelector(state => state.packageUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = packageUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PACKAGE_UPDATE_RESET })
            history.push('/')
        } else {
            if (!pkg.title || pkg.id !== Number(packageId)) {
                dispatch(listPackageIdDetails(packageId))
            } else {
                setTitle(pkg.title)
                setPrice(pkg.price)
                setLimit(pkg.limit)

            }
        }
    }, [dispatch, pkg, packageId, history, successUpdate])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePackage({
            id: packageId,
            title,
            price,
            limit
        }))
    }

    return (
        <div>
            <Link to='/subscription'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Package</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='title'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='limit'>
                                <Form.Label>Total task</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter number'
                                    value={limit}
                                    onChange={(e) => setLimit(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>
    )
}

export default PackageEditScreen
