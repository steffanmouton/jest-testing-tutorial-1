import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    // render the component
    render(<UserForm />);

    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Make an assertion - the component does what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
    const mock = jest.fn();

    // Try to render
    render(<UserForm onUserAdd={mock} />);

    // Find the two inputs
    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});

    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('jane');

    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');

    // Find the button
    const button = screen.getByRole('button');

    // Simulate clicking the button
    await user.click(button);

    // Assertion - onUserAdd was called on clicking the button
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: 'jane', email: 'jane@jane.com'});
})