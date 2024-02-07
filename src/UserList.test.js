import {render, screen, within} from '@testing-library/react';
import UserList from "./UserList";

function renderComponent() {
    const users = [
        { name: 'John', email: 'john@example.com' },
        { name: 'sam', email: 'sam@example.com' },
    ];

    render(<UserList users={users} />);

    return { users };
}

test('render one row per user', () => {
    const {users} = renderComponent();
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // Another Solution:
    // const rows = container.querySelectorAll('tbody tr');

    expect(rows).toHaveLength(users.length);
})

test('render the email and name of each user', () => {
    const {users} = renderComponent();

    for (let user of users){
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

})