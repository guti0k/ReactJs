import style from './RegisterForm.module.sass'
import clsx from 'clsx'
import { useFormik } from 'formik'
import * as Yup from 'yup'


// using formik and yup
function RegisterForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Your name must be at least 5 characters')
                .max(25, 'Your name must be under 25 characters')
                .required("You must fill in this section"),
            email: Yup.string()
                .email('Invalid Email')
                .required("You must fill in this section"),
            address: Yup.string()
                .required("You must fill in this section"),
            password: Yup.string()
                .min(8, 'Your name must be at least 8 characters')
                .required("You must fill in this section"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], "Password does not match")
                .required("You must fill in this section"),
        }),
        onSubmit: value => {
            console.log(value)
        }
    })

    return (
        <div >
            <h3 className={clsx(style.heading_form)}>Register Form</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={clsx(style.form_group)}>
                    <label className={clsx(style.label_form)} htmlFor="name">Name: </label>
                    <div className={clsx(style.input_group)}>
                        <input className={clsx(style.input_form)} id='name' type="text" name='name' 
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && formik.touched.name && (<p className={clsx(style.form_error)}>{formik.errors.name}</p>)}
                    </div>
                </div>

                <div className={clsx(style.form_group)}>
                    <label className={clsx(style.label_form)} htmlFor="name">Email: </label>
                    <div className={clsx(style.input_group)}>
                        <input className={clsx(style.input_form)} id='email' type="email" name='email' 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (<p className={clsx(style.form_error)}>{formik.errors.email}</p>)}
                    </div>
                </div>

                <div className={clsx(style.form_group)}>
                    <label className={clsx(style.label_form)} htmlFor="address">Address: </label>
                    <div className={clsx(style.input_group)}>
                        <input className={clsx(style.input_form)} id='address' type="text" name='address' 
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.address && formik.touched.address && (<p className={clsx(style.form_error)}>{formik.errors.address}</p>)}
                    </div>
                </div>

                <div className={clsx(style.form_group)}>
                    <label className={clsx(style.label_form)} htmlFor="password">Password: </label>
                    <div className={clsx(style.input_group)}>
                        <input className={clsx(style.input_form)} id='password' type="password" name='password' 
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && formik.touched.password && (<p className={clsx(style.form_error)}>{formik.errors.password}</p>)}
                    </div>
                </div>

                <div className={clsx(style.form_group)}>
                    <label className={clsx(style.label_form)} htmlFor="confirmPassword">Confirm Password: </label>
                    <div className={clsx(style.input_group)}>
                        <input className={clsx(style.input_form)} id='confirmPassword' type="password" name='confirmPassword' 
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (<p className={clsx(style.form_error)}>{formik.errors.confirmPassword}</p>)}
                    </div>
                </div>

                <button>Submit Form</button>
            </form>
        </div>
    )
}

export default RegisterForm;