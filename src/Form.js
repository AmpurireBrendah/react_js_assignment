import { useState } from 'react';
import './Form.css';

export default function Form() {
  // Form 1: Name, Email, Password
  function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }

  // Form 2: Textarea
  function TextareaForm() {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The message you entered was: ${message}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }

  // Form 3: Select Dropdown
  function SelectForm() {
    const [fruit, setFruit] = useState("apple");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The fruit you selected was: ${fruit}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Pick a fruit:
          <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
        </label>
        <br />
        <button type="submit">Choose</button>
      </form>
    );
  }

  return (
    <div className='form-card'>
      <h1>React Forms</h1>
      <h3>Form 1: User Information</h3>
      <UserForm />
      <h3>Form 2: Message</h3>
      <TextareaForm />
      <h3>Form 3: Favorite Fruit</h3>
      <SelectForm />
    </div>
  );
}


