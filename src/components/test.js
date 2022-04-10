import React, { Component } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { Card, Button, CardFooter, FormGroup, CardBody, CardHeader, Col, Row, Container, BreadcrumbItem, Breadcrumb } from 'reactstrap';

import { getToken } from './../utils/Helper';
var aInstance = require('../utils/RestClient')
class SystemVariables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            variables: []
        };
    }
    componentDidMount() {
        var token = { headers: { 'token': getToken() } };
        this.setState({ isLoading: true })
        aInstance.get('/api/systemvariables/', token)
            .then(res => {
                this.setState({ isLoading: false })
                if (!res.data.isError) {
                    if (res.data.obj.length > 0) {
                        this.setState({ variables: res.data.obj })
                    } else {
                        this.addVariablesControl()
                    }
                }
                else if (res.data.hasOwnProperty('tokenExpiredError') && res.data.tokenExpiredError) {
                    window.location = '/' + window.location.pathname.split('/')[1] + '/login';
                }
            });
    }

    addVariablesControl = (e) => {
        this.setState((prevState) => ({
            variables: [...prevState.variables, { "variablename": '', 'value': '' }],
        }));
    }
    onChangeFields = (e) => {
        if (["variablename", 'value'].includes(e.target.name)) {
            let variables = [...this.state.variables]
            variables[e.target.dataset.id][e.target.name] = e.target.value;
            this.setState({ variables }, () => console.log(this.state.variables))
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    removeOptionVariables = (idx) => () => {
        this.setState({ variables: this.state.variables.filter((s, sidx) => idx !== sidx) });
    }

    onSubmit() {
        if (this.state.variables.length > 0) {
            var token = { headers: { 'token': getToken() } };
            let pushRequest = true;
            let isDuplicate = false;
            let arr = this.state.variables.map(obj => obj.variablename).filter((obj, i, arr) => i === arr.indexOf(obj))
            if (arr.length !== this.state.variables.length) {
                isDuplicate = true;
                ToastsStore.error('Variable name cannot be same')
            }
            this.state.variables.forEach(element => {
                let variavleName = element.variablename;
                let value = element.value;
                if (variavleName === '') {
                    pushRequest = false;
                    ToastsStore.error('Variable name is missing')
                }
                else if (value === '') {
                    pushRequest = false;
                    ToastsStore.error('Variable value is missing')
                }
            });
            if (pushRequest && !isDuplicate) {
                this.setState({ isLoading: true })
                aInstance.post('/api/systemvariables/', this.state.variables, token)
                    .then(res => {
                        this.setState({ isLoading: false })
                        if (!res.data.isError) {
                            ToastsStore.success('Global variables updated successfully')
                        }
                    });
            }
        }

    }

    launchAllApps() {
        window.open(window.location.origin + '/' + localStorage.getItem('instanceId') + '/applications/login')
    }

    render() {
        if (window.location.pathname.split('/')[1] !== localStorage.getItem('instanceId'))
            this.props.history.push('/' + window.location.pathname.split('/')[1] + '/login');
        return (
            <div className="animated fadeIn">
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} lightBackground />
                {
                    this.state.isLoading && <LoadingOverlay
                        active={this.state.isLoading}
                        spinner
                        text='Loading...'
                    >
                    </LoadingOverlay>
                }
                <Breadcrumb>
                    <BreadcrumbItem><a href={'/' + localStorage.getItem('instanceId') + '/home'}>Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Global Variables</BreadcrumbItem>
                </Breadcrumb>
                <Container fluid>
                    <Row>
                        <Col xs="12">
                            <Card>
                                {/* <CardHeader>
                                    Global Variables
                                    <div style={{ marginLeft: 'auto' }}>
                                        <Link > <i style={{ marginLeft: '10px' }} onClick={this.launchAllApps.bind(this)} className="fa fa-play" style={{ color: '#fff', fontSize: 'large' }}
                                        ></i></Link>
                                    </div>
                                </CardHeader> */}
                                <CardHeader style={{ display: 'flex' }}>Global Variables
                                    {/* <div style={{marginLeft:"auto"}}>
                                        <Link > <i style={{  marginTop: 4,color:'#fff', fontSize:'large'}} className="fa fa-play fa-lg"  
                                         onClick={this.launchAllApps.bind(this)}   ></i></Link>
                                    </div> */}
                                </CardHeader>
                                <CardBody>
                                    {/* {(!this.state.variables || this.state.variables.length === 0) &&
                                        this.addVariablesControl()
                                    } */}
                                    <FormGroup row className="my-0">
                                        <Col xs="2">
                                            <FormGroup>
                                                <label>Variable Name</label>
                                            </FormGroup>
                                        </Col>
                                        {/* <Col xs="2">
                                            <FormGroup>
                                                <label>Data Type</label>
                                            </FormGroup>
                                        </Col> */}
                                        <Col xs="2">
                                            <FormGroup>
                                                <label>Value</label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                    {this.state.variables &&
                                        this.state.variables.map((val, idx) => {
                                            let varname = `varname-${idx}`
                                            let value = `value-${idx}`
                                            return (
                                                <div key={idx}>
                                                    <FormGroup row className="my-0">
                                                        <Col xs="2">
                                                            <FormGroup>
                                                                <input
                                                                    type="text"
                                                                    name="variablename"
                                                                    data-id={idx}
                                                                    id={varname}
                                                                    value={this.state.variables[idx].variablename}
                                                                    className="form-control"
                                                                    onChange={this.onChangeFields.bind(this)}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        {/* <Col xs="2">
                                                            <FormGroup>
                                                                <select id={datatype}
                                                                    name="datatype"
                                                                    data-id={idx}
                                                                    onChange={this.onChangeCollection.bind(this)}
                                                                    className="form-control"
                                                                    value={this.state.variables[idx].datatype}>
                                                                    <option></option>
                                                                    <option value="str">String</option>
                                                                    <option value="num">Number</option>
                                                                </select>
                                                            </FormGroup>
                                                        </Col> */}
                                                        <Col xs="2">
                                                            <FormGroup>
                                                                <input
                                                                    type="text"
                                                                    name="value"
                                                                    data-id={idx}
                                                                    id={value}
                                                                    value={this.state.variables[idx].value}
                                                                    className="form-control"
                                                                    onChange={this.onChangeFields.bind(this)}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col xs="2" >
                                                            <FormGroup>
                                                                <button className="btn btn-primary"
                                                                    onClick={this.addVariablesControl.bind(this)}>
                                                                    <i className="fa fa-plus-circle" />
                                                                </button>
                                                                {idx !== 0 &&
                                                                    <Button
                                                                        onClick={this.removeOptionVariables(idx)}
                                                                        className="btn btn-danger alignGridSecondaryButton"
                                                                    >
                                                                        <i className="fa fa-minus-circle" />
                                                                    </Button>
                                                                }
                                                            </FormGroup>
                                                        </Col>
                                                    </FormGroup>

                                                </div>
                                            )
                                        })
                                    }
                                </CardBody>
                                <CardFooter>
                                    <Button type="submit" onClick={this.onSubmit.bind(this)} disabled={this.state.variables.length === 0} color="primary">Submit</Button>
                                    {/* &nbsp;<Button className="btn btn-secondary" disabled={this.state.isLoading} color="secondary" onClick={this.onCancel.bind(this)}> Cancel</Button> */}
                                </CardFooter>
                            </Card >
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SystemVariables;