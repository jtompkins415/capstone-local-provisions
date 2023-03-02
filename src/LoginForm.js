import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    


    const handleChange = (evt) => {
        const {name, value} = evt.target
        setFormData(data => ({...data,[name]:value}));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let res = await login(formData);
        if(res.success){
            return navigate('/main')
        } else {
            console.error(res.errors)
        }
    }

    return (
        <div>
            <div className='form-title'>
                <h1> LOGIN </h1>
            </div>
        <Form className='form' onSubmit={handleSubmit}>
            <FormGroup row>
                <Label className="form-label" htmlFor='username' sm={3}>USERNAME: </Label>
                <Col sm={8}>
                <Input className='form-input'  id='username' name='username' type='text' autoComplete='current-username' value={formData.username} onChange={handleChange} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label className="form-label" htmlFor='password' sm={3}>PASSWORD: </Label>
                <Col sm={8}>
                <Input className='form-input'  id='password' name='password' type='password' autoComplete='current-password' value={formData.password} onChange={handleChange} />
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