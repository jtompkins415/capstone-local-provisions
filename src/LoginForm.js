import {useState} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Col
} from 'reactstrap';
import './Form.css'

const LoginForm = ({login}) => {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    
    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData(data => ({...data,[name]:value}));
    }


    return (
        <div>
            <div className='form-title'>
                <h1> LOGIN </h1>
            </div>
        <Form className='form'>
            <FormGroup row>
                <Label className="form-label" htmlFor='username' sm={3}>USERNAME: </Label>
                <Col sm={8}>
                <Input className='form-input'  id='username' name='username' type='text' value={formData.username} onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="form-label" htmlFor='password' sm={3}>PASSWORD: </Label>
                <Col sm={8}>
                <Input className='form-input'  id='password' name='password' type='password' value={formData.password} onChange={handleChange} />
                </Col>
            </FormGroup>
            <Button outline className="form-button" color="success">
                Login
            </Button>
            <Button outline className="form-button" color='danger' href="/main">
                Cancel
            </Button>
        </Form>
        </div>
    )
};

export default LoginForm