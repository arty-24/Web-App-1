import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        'service_hni9rno',
        'template_btio8uc',
        {
          to_name: 'Arturo',
          from_name: data.name,
          message: data.message,
          email: data.email,
          methodOfContact: data.contactMethod,
          supportType: data.contactPurpose,
        },
        'aUrx2LzaHZDy5VXYD'
      );


      const response2 = await emailjs.send(
        'service_hni9rno',
        'template_xp51w2j',
        {
          to_name: "Arturo",  
          from_name: data.name,
          message: data.message,
          email: data.email,
          reply_message: 'Thank you for contacting us! We will get back to you shortly.',
        },
        'aUrx2LzaHZDy5VXYD'
      );
  
      setFormStatus('Message sent successfully!');
    } catch (error) {
      setFormStatus('Error sending message.');
    }
  };


  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div>
          <label htmlFor="contactMethod">Preferred Contact Method:</label>
          <select id="contactMethod" {...register('contactMethod')}>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="textMessage">Text Message</option>
          </select>
        </div>
        <div>
          <label>Purpose of Contact:</label>
          <div>
            <label>
              <input
                type="radio"
                value="tech support"
                {...register('contactPurpose')}
              />
              Tech Support
            </label>
            <label>
              <input
                type="radio"
                value="hardware support"
                {...register('contactPurpose')}
              />
              Hardware Support
            </label>
            <label>
              <input
                type="radio"
                value="job interview"
                {...register('contactPurpose')}
              />
              Job Interview Request
            </label>
          </div>
        </div>
        <div>
          <label>Agreement:</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="terms"
                {...register('terms', { required: 'You must agree to the terms' })}
              />
              I agree to the terms and conditions
            </label>
            {errors.terms && <p>{errors.terms.message}</p>}
          </div>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {formStatus && <p>{formStatus}</p>}
    </div>
  );
}

export default ContactPage;
